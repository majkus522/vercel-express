import { SpeedInsights } from "@vercel/speed-insights/next";

// Add Express
const express = require("express");

const app = express();
injectSpeedInsights();

app.get("/", (req, res) => {
  res.send(<SpeedInsights/>);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;