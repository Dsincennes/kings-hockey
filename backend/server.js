// Example using Express.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sampleRoute = require("./routes/sample");
const gamesRoutes = require("./routes/gamesRoutes");

app.use(bodyParser.json());

// Include route files
app.use("/sample", sampleRoute);
app.use("/games", gamesRoutes);

// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello, Express.js Server!</h1>");
});

// Example specifying the port and starting the server
const port = process.env.PORT || 8005; // You can use environment variables for port configuration
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
