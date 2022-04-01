const express = require("express");
const UserModel = require("../models/userModel");

const usersRouter = express.Router();

usersRouter.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({
      userId: req.body.userId,
      password: req.body.password,
      verified: true,
    });
    if (user) {
      res.send(user);
    } else {
      res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

usersRouter.post("/register", async (req, res) => {
  try {
    const newUser = new UserModel({ ...req.body, verified: false });
    await newUser.save();
    res.send("User registered successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = usersRouter;
