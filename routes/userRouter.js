import express from "express";

import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Testing user router");
});

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

export default userRouter;
