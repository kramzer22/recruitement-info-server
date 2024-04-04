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
    if (userData.password) {
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
    console.log("Unable to save user");

    await session.abortTransaction();
    session.endSession();

    throw err;
  }
};

export default { registerUser };
