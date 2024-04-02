import bcrypt from "bcrypt";

import globalVariables from "./globalVariables.js";

const hashData = async (data) => {
  return bcrypt
    .hash(globalVariables.getPassPhrase(), 10)
    .then((hash) => {
      return hash;
    })
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

const decryptHashData = async (hashData) => {
  return bcrypt
    .compare(globalVariables.getPassPhrase(), hashData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

export default {
  hashData,
  decryptHashData,
};
