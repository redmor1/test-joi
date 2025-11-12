const express = require("express");
const { createUser } = require("../services/userService.js");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Hello world, user module");
});

userRouter.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    console.log("CONSOLE.LOG", req.body);
    res.send("User created", user);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

module.exports = userRouter;
