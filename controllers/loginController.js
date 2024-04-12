import loginHelpers from "../helpers/loginHelpers.js";

const loginUser = async (req, res) => {
  const userData = req.body;
  console.log(userData);
  loginHelpers
    .loginUser(userData)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      if (err.status === 400 || err.status === 401 || err.status === 404) {
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
  loginUser,
};
