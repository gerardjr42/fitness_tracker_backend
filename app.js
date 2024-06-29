const express = require("express");

const app = express();

//Middleware
app.use(express.json());

//HEALTH CHECK
app.get("/", (req, res) => {
  res.send("Welcome to my fitness app!")
});

//Setting up our app to use workoutControllers, which holds our routes and our workout array
const workoutController = require("./controllers/workoutsControllers")
//Declare app to use workoutController whenever /workouts is used in our URL
app.use("/workouts", workoutController)

module.exports = app;

