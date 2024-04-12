import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

import utilityFunctions from "../util/utilityFunctions.js";
import globalVariables from "../util/globalVariables.js";

const loginUser = async (userData) => {
  try {
    const user = await User.findOne({ username: userData.username });
    if (user) {
      const result = await utilityFunctions.decryptHashData(
        userData.password,
        user.password
      );

      if (!result) {
        throw new Error("invalidPasswordError");
      } else {
        return {
          username: user.username,
          accessToken: jwt.sign(
            {
              username: userData.username,
              password: userData.password,
            },
            globalVariables.getJWTSecret()
          ),
        };
      }
    } else {
      throw new Error("userNotFoundError");
    }
  } catch (err) {
    if (err.message === "userNotFoundError") {
      throw { status: 404, field: "username", message: "User not found" };
    } else if (err.message === "invalidPasswordError") {
      throw { status: 401, field: "username", message: "Invalid password" };
    } else {
      throw {
        status: 500,
        message: "Internal server problem",
      };
    }
  }
};

export default {
  loginUser,
};
