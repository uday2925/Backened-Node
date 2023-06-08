const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


//authorisation
userRouter.post("/register", async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    //Technique 2 (auto-gen a salt and hash):
    //bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    //});

    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send(400).json({ error: err.message });
      } else {
        const user = new UserModel({ ...req.body, password: hash });
        await user.save();
        res.status(200).json({
          msg: "New user has been updated and here are the detials",
          details: { ...req.body, password: password },
        });
      }
    });

    // const user = new UserModel(req.body);
    // await user.save();
    // res.status(200).json({
    //   msg: "New user has been updated and here are the detials",
    //   details: user,
    // });
  } catch (err) {
    res.status(400).json({ erorMessage: err });
  }
});

//authentication
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
  try {
    const user = await UserModel.findOne({ email });
    console.log("hashedpassword",user)
    bcrypt.compare(password, user.password, function (err, result) {
      // result == true
      if (result) {
       // var token = jwt.sign({ randomepayload: 'randomepayload' }, 'secretkey');
        var token = jwt.sign({ course: 'backened' }, 'secretkeymasai');
        //once authorised providing the token which is usually a string.
        res.status(200).json({ msg: "Login successfull!",token:token});
      } else {
        res.status(200).json({ msg: "email or password is wrong" });
      }
    });
    // if (user) {
    //   res.status(200).json({ msg: "Login successfull" });
    // } else {
    //   res.status(200).json({ msg: "email or password is wrong" });
    // }
  } catch (err) {
    console.log(err)
    res.status(400).json({ err: err });
  }
});

module.exports = { userRouter };
