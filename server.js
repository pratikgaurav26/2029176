// server.js
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000; // Change this to your desired port number

const JOHN_DOE_RAILWAYS_API_BASE_URL = "http://20.244.56.144/train"; // Replace with the actual base URL of the John Doe Railways API

// Endpoint to get the real-time train schedule for the next 12 hours
app.get("/trains", async (req, res) => {
  try {
    const now = new Date();
    const twelveHoursLater = new Date(now.getTime() + 12 * 60 * 60 * 1000);

    // Replace '/schedule' with the actual endpoint provided by the John Doe Railways API to fetch the real-time train schedule
    const response = await axios.get(
      `${JOHN_DOE_RAILWAYS_API_BASE_URL}/schedule`
    );

    // Filter the train schedule to get trains departing in the next 12 hours
    const next12HourTrains = response.data.filter(
      (train) => new Date(train.departureTime) <= twelveHoursLater
    );

    res.json(next12HourTrains);
  } catch (error) {
    console.error("Error fetching train schedule:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the train schedule" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
