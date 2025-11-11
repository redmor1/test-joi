const express = require("express");
const { createUser } = require("../services/userService.js");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Hello world, user module");
});

userRouter.post("/", (req, res) => {
  try {
    const user = createUser(req.body);
    res.send("User created");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});

module.exports = userRouter;
