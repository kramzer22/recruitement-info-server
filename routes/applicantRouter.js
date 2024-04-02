import express from "express";

import applicantController from "../controllers/applicantController.js";

const applicantRouter = express.Router();

applicantRouter.get("/", (req, res) => {
  res.send("Testing applicant router");
});

applicantRouter.post("/register", applicantController.registerApplicant);

export default applicantRouter;
