const express = require("express");
let router = express.Router();

// For every call on endpoint "/garage", this middleware will run before going to the actual route.
// Check your console! 
router.use((req, res, next) => {
    console.log("Calling "+req.url+" at "+ new Date().toISOString());
    next(); // Done, call the next middleware or actual endpoint.
})

router.route("/car/:id").get((req, res) => {
  res.send("retrieved a car in garage with id" + req.params.id);
});

router.route("/car").post((req, res) => {
  res.send("created a car in garage");
});

module.exports = router;