// Example using Express.js
const express = require("express");
const app = express();

// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

// Include route files
const sampleRoute = require("./routes/sample");
app.use("/sample", sampleRoute);

// Example specifying the port and starting the server
const port = process.env.PORT || 8005; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
