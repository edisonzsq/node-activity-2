const express = require("express");
const app = express();
app.use(require("body-parser").json());
const port = 3000;
const db = require("./database");

// === Initialize Database === //
db.init().then((model) => {
  // === Implementations === //
  app.post("/garage", async (req, res) => {
    res.send(await model.Garage.create(req.body));
  });

  app.get("/garage", async (req, res) => {
    res.send(
      await model.Garage.findAll({
        include: model.Car,
      })
    );
  });

  app.post("/garage/:garageId/car", async (req, res) => {
    const createdCar = await model.Car.create(req.body);
    await createdCar.setGarage(
      await model.Garage.findOne({ id: req.params.garageId })
    );
    res.send(createdCar);
  });

  app.get("/car", async (req, res) => {
    res.send(
      await model.Car.findAll({
        include: model.Garage,
      })
    );
  });

  // Start listening
  console.log("Listening to port " + port);
  app.listen(port);

  // Bootstrap
//   const bootstrap = require("./bootstrap-data");
//   (async () => {
//     await bootstrap.init(model);
//   })();
});
