import mongoose from "mongoose";

import modelValidations from "../util/modelValidations.js";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 36,
    require: true,
    unique: true,
    validate: {
      validator: modelValidations.isUser,
      message: "Firstname must only contain alphabetic characters.",
    },
  },
  email: {
    type: String,
    minlength: 6,
    maxlength: 255,
    require: true,
    unique: true,
    validate: {
      validator: modelValidations.isEmail,
      message: "Invalid email.",
    },
  },
  mobile: {
    type: String,
    maxlength: 12,
    unique: true,
    validate: {
      validator: modelValidations.isMobile,
      message: "Invalid number.",
    },
  },
  password: {
    type: String,
    minlength: 6,
    require: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
