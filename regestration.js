// server.js
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000; // Change this to your desired port number

const JOHN_DOE_RAILWAY_REGISTER_URL = "http://20.244.56.144/train/register";

app.post("/train/register", async (req, res) => {
  try {
    // Replace these values with your company details
    const companyData = {
      companyName: "Train Central",
      ownerName: "Rahul",
      rollNo: "1",
      ownerEmail: "rahul@abc.edu",
      accessCode: "FKDLjg",
    };

    // Make a POST request to the John Doe Railway registration endpoint
    const response = await axios.post(
      JOHN_DOE_RAILWAY_REGISTER_URL,
      companyData
    );

    // Assuming the response contains a success message or company ID
    const registrationResult = response.data;

    res.json(registrationResult);
  } catch (error) {
    console.error("Error registering company:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the company" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${3000}`);
});
