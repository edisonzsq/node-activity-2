const express = require("express");
const app = express();
app.use(require('body-parser').json());
const port = 3000;
const db = require("./database");

// === Initialize Database === //
db.init().then((model) => {
  // === Implementations === //
  app.post("/garage", async (req, res) => {
    res.send(await model.Garage.create(req.body));
  });

  app.get("/garage", async (req, res) => {
    res.send(await model.Garage.findAll());
  });

  app.post("/garage/:garageId/car", (req, res) => {
    // Add a car to garage based on given garageId
  });

  app.get("/car", (req, res) => {
    // Get all cars
  });

  // Start listening
  console.log("Listening to port " + port);
  app.listen(port);

});
