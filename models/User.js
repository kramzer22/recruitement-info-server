import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 36,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    minlength: 6,
    maxlength: 255,
    require: true,
    unique: true,
  },
  mobile: {
    type: String,
    minlength: 9,
    maxlength: 12,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    require: true,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
