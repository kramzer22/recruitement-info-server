import express from "express";

import loginController from "../controllers/loginController.js";

const userRouter = express.Router();

userRouter.post("/", loginController.loginUser);

export default userRouter;
