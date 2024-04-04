import users from "../helpers/userHelpers.js";

const registerUser = async (req, res) => {
  const userData = req.body;

  users
    .registerUser(userData)
    .then(() => {
      res.status(201).send("User registration route complete.");
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 11000) {
        const keys = Object.keys(err.keyValue);
        const field = keys[0];
        const value = err.keyValue[field];

        res.status(400).json({
          message: "duplicate found.",
          field: field,
          value: value,
        });
        // } else if (!err.code && err.name === "ValidationError") {
        //   res.status(400).json({
        //     message: err._message,
        //     field: "notification",
        //     value: err,
        //   });
        // }
      } else {
        res.status(500).send("Unable to save User's data.");
      }
    });
};

export default { registerUser };
