import mongoose from "mongoose";

// Define a custom validation function
const isAlphabetic = (value) => {
  const cleanValue = value.replace(/\s{2,}/g, " ").toLowerCase();
  return /^[a-zA-Z\s]+$/.test(cleanValue);
};

const applicantSchema = new mongoose.Schema({
  name: {
    firstname: {
      type: String,
      minlength: 2,
      maxlength: 50,
      require: true,
      validate: {
        validator: isAlphabetic,
        message: "Firstname must only contain alphabetic characters.",
      },
    },
    middlename: {
      type: String,
      minlength: 2,
      maxlength: 50,
      require: true,
      validate: {
        validator: isAlphabetic,
        message: "Middlename must only contain alphabetic characters.",
      },
    },
    lastname: {
      type: String,
      minlength: 2,
      maxlength: 50,
      require: true,
      validate: {
        validator: isAlphabetic,
        message: "Lastname must only contain alphabetic characters.",
      },
    },
  },
  birthdate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
});

const Applicant = mongoose.model("applicant", applicantSchema);

export default Applicant;
