import mongoose from "mongoose";

import Applicant from "../models/Applicant.js";

const registerApplicant = async (applicantData) => {
  console.log(applicantData);

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const applicant = new Applicant({
      name: {
        firstname: applicantData.firstname,
        middlename: applicantData.middlename,
        lastname: applicantData.lastname,
      },
      birthdate: applicantData.birthdate,
      gender: applicantData.gender,
    });

    await applicant.save();
    await session.commitTransaction();
    session.endSession();

    console.log("Applicant's data registration successful.\n", applicant);
  } catch (err) {
    console.log("Unable to save applicant\n", err);
    await session.abortTransaction();
    session.endSession();

    throw err;
  }
};

export default { registerApplicant };
