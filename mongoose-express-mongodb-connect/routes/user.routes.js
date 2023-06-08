const express = require("express");
const userRouter = express.Router();
const { userModel, UserModel } = require("../model/user.model");

//authorisation
userRouter.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).json({
      msg: "New user has been updated and here are the detials",
      details: user,
    });
  } catch (err) {
    res.status(400).json({ erorMessage: err });
  }
});

//authentication
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email, password });
    if (user) {
      res.status(200).json({ msg: "Login successfull" });
    } else {
      res.status(200).json({ msg: "email or password is wrong" });
    }
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = { userRouter };
