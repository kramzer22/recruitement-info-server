import mongoose from "mongoose";

import User from "../models/User.js";

import utilityFunctions from "../util/utilityFunctions.js";

const registerUser = async (userData) => {
  console.log(userData);

  let session;

  try {
    session = await mongoose.startSession();
    session.startTransaction();

    let hashPassword;
    if (userData.password && userData.password.length >= 6) {
      hashPassword = await utilityFunctions.hashData(userData.password);
    } else {
      throw new Error("Password is required");
    }

    const user = new User({
      username: userData.username,
      email: userData.email,
      mobile: userData.mobile,
      password: hashPassword,
    });

    await user.save();
    await session.commitTransaction();
    session.endSession();

    console.log("User's data registration successful.\n", user);
  } catch (err) {
    await session.abortTransaction();
    session.endSession();

    console.log(JSON.stringify(err));

    if (err.name && err.name === "ValidationError") {
      const field = Object.keys(err.errors)[0];
      const { path, value } = err.errors[field].properties;

      console.log(path);

      throw {
        status: 400,
        message: err.message,
        field: path,
        value: value,
      };
    } else {
      throw {
        status: 500,
        message: "Internal server problem",
      };
    }
  }
};

const loginUser = async (userData) => {
  try {
    const user = await User.findOne({ username: userData.username });
    if (user) {
      const result = await utilityFunctions.decryptHashData(
        userData.password,
        user.password
      );

      console.log(result);

      if (!result) {
        throw new Error("invalidPasswordError");
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
  registerUser,
  loginUser,
};
