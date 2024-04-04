import bcrypt from "bcrypt";

import globalVariables from "./globalVariables.js";

const hashData = async (data) => {
  const saltRounds = 10;
  return bcrypt
    .hash(data, saltRounds)
    .then((hash) => {
      return hash;
    })
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

const decryptHashData = async (plainPassword, hashPassword) => {
  return bcrypt
    .compare(plainPassword, hashPassword)
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
