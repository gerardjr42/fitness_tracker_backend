//Initialize express and router
const express = require("express")
const router = express.Router()

//Setting up our workout Array
const workoutArray = require("../models/workout")

//Sending workout Array to server
router.get("/", (req, res) => {
  res.status(200).send(workoutArray)
});

//Get a single workout
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const workout = workoutArray.find(ele => ele.id === +id);
  if(workout) {
    //Use status, not statusCode
    res.status(200).send(workout)
  } else {
    res.status(404).json({error: `Workout with ${id} not found`})
  }
});

//exporting this module
module.exports = router;




