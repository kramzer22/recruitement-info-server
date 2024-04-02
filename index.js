// Import required modules
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyparser from "body-parser";

import globals from "./util/globalVariables.js";

// Router imports
import loginRouter from "./routes/applicantRouter.js";
import applicantRouter from "./routes/applicantRouter.js";

// Create an instance of application
const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Use body-parser middleware to parse incoming request bodies
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.json());

// Test route Hello, world!
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

mongoose.connect(globals.getMongoUri());
// .then(() => {
//   if (mongoose.connection.readyState === 1) {
//     console.log("Mongoose connected to MongoDB");
//   } else {
//     console.log("Mongoose connection failed");
//   }
// })
// .catch((error) => {
//   console.error("Error connecting to MongoDB:", error);
// });

app.use("/api/applicant", applicantRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
