const express = require("express");
const bcrypt = require("bcrypt"); //for hashing the password
const { UserModel } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.json({ err: err });
      } else {
        const user = new UserModel({ name, email, password: hash });
        // console.log(user)
        await user.save();
        res.json({ msg: `User has beed registered with username ${name}` });
      }
    });
  } catch (err) {
    console.log({ err });
    res.json({ error: err });
  }
});
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      // Load hash from your password DB.
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          //below ukrs is private key and we are generating token using jwt and 1st one is random paylad which can be used to store the user details if any required.
          //_id is the key in which user is storing
          var token = jwt.sign({ userID: user._id,user:user.name }, "ukrs");
          res.json({
            msg: `Hi ${user.email}!, You are authenticated successfully and here is the token:- ${token}`,
          });
        } else {
          res.json({ eroor: `please check your credentials   !` });
        }
      });
    } else {
      res.json({ msg: "User does not exist, please register!" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  userRouter,
};
