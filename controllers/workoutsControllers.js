//Initialize express and router
const express = require("express")
const router = express.Router()

//Setting up our workout Array
const workoutArray = require("../models/workout")

//Sending workout Array to server
router.get("/", (req, res) => {
  res.status(200).send(workoutArray)
});

//exporting this module
module.exports = router;




