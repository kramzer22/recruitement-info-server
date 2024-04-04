import userHelper from "../helpers/userHelpers.js";

const registerUser = async (req, res) => {
  const userData = req.body;

  userHelper
    .registerUser(userData)
    .then(() => {
      res.status(201).send("User registration route complete.");
    })
    .catch((err) => {
      console.log(err);
      if (err.status === 400) {
        res.status(err.status).json({
          message: err.message,
          field: err.field,
          value: err.value,
        });
      } else {
        res.status(err.status).send(err.message);
      }
    });
};

const loginUser = async (req, res) => {
  const userData = req.body;
  console.log(userData);
  userHelper
    .loginUser(userData)
    .then(() => {
      res.status(200).send("Welcome user.");
    })
    .catch((err) => {
      console.log(err);
      if (err.status === 400) {
        res.status(err.status).json({
          message: err.message,
          field: err.field,
          value: err.value,
        });
      } else {
        res.status(err.status).send(err.message);
      }
    });
};

export default {
  registerUser,
  loginUser,
};
