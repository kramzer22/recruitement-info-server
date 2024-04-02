import express from "express";

import userController from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Testing user router");
});

userRouter.post("/register", userController.registerUser);

export default userRouter;
