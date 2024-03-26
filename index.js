// Import required modules
import express from "express";
import mongoose from "mongoose";

import globals from "./util/globalVariables.js";
// import mongoSetup from "./util/mongoSetup.js";

// Create an instance of application
const app = express();

const MONGODB_URI = globals.MONGODB_URI;
console.log(MONGODB_URI);

// Test route Hello, world!
app.get("/", (req, res) => {
  if (mongoose.connection.readyState === 1) {
    console.log("Mongoose connected to MongoDB");
  } else {
    console.log("Mongoose connection failed");
  }

  res.send("Hello, world!");
});

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
