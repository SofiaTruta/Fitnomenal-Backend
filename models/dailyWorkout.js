
import mongoose from "mongoose";

// Define the workout history schema
const dailyWorkoutSchema = new mongoose.Schema({
  userId: {
    type: String, // Reference to the User model
    required: true,
  },
  // I dont think we need this
  // date: {
  //   type: Date,
  //   required: true,
  // },
  exercises: [], // an array of exercise names?
  status: {
    type: String, // "in progress" or "completed"
    default: "in progress", // when the user marks it as finished the status changes to completed
  },
      
});

// Create the DailyWorkout model
export const DailyWorkout = mongoose.model('DailyWorkout', dailyWorkoutSchema);

