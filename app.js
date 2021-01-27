const express = require("express");
const app = express();
const port = 3000;


app.post('/garage', (req, res) => {
    // Add a garage to db
});

app.get('/garage', (req, res) => {
    // Get all garages
});

app.post('/garage/:garageId/car', (req, res) => {
    // Add a car to garage based on given garageId
});

app.get('/car', (req, res) => {
    // Get all cars
});

console.log("Listening to port "+port);
app.listen(port);
