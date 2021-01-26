const express = require("express");
const app = express();
const port = 3000;
const garage = require('./routes/garage'); // Import the module from garage.js

app.use('/garage', garage); // Use garage.js file to handle every endpoint that starts with /garage

// Get a member
app.get("/house/member/:id", function (req, res) {
  res.send("retrieved a member of the house with id" + req.params.id);
});

// Add a member
app.post("/house/member", function (req, res) {
  res.send("added a member to the house");
});

console.log("Listening to port "+port);
app.listen(port);
