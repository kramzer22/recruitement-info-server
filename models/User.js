import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 6,
    maxlength: 30,
    require: true,
  },
  email: {
    type: String,
    minlength: 6,
    maxlength: 30,
    require: true,
  },
  mobile: {
    type: String,
    minlength: 9,
    maxlength: 12,
    require: true,
  },
  password: {
    type: String,
    minlength: 6,
    require: true,
  },
});

const User = mongoose.user("user", userSchema);

export default User;
