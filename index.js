// Import required modules
import express from "express";

// Create an instance of application
const app = express();

// Test route Hello, world!
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
