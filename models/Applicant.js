import mongoose from "mongoose";

import modelValidations from "../util/modelValidations.js";

const applicantSchema = new mongoose.Schema({
  name: {
    firstname: {
      type: String,
      minlength: 2,
      maxlength: 50,
      require: true,
      validate: {
        validator: modelValidations.isAlphabet,
        message: "Firstname must only contain alphabetic characters.",
      },
    },
    middlename: {
      type: String,
      minlength: 2,
      maxlength: 50,
      require: true,
      validate: {
        validator: modelValidations.isAlphabet,
        message: "Middlename must only contain alphabetic characters.",
      },
    },
    lastname: {
      type: String,
      minlength: 2,
      maxlength: 50,
      require: true,
      validate: {
        validator: modelValidations.isAlphabet,
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
