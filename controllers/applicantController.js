import applicants from "../helpers/applicantHelpers.js";

const registerApplicant = async (req, res) => {
  const applicantData = req.body;
  applicants
    .registerApplicant(applicantData)
    .then(() => {
      res.status(201).send("Applicant registration route complete.");
    })
    .catch((err) => {
      res.status(400).send("Unable to save Applicant's data.");
    });
};

export default { registerApplicant };
