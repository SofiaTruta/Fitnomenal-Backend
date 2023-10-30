
import mongoose from "mongoose";

// Define the workout history schema
const dailyWorkoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  exercise: []
   
      
});

// Create the DailyWorkout model
export const DailyWorkout = mongoose.model('DailyWorkout', dailyWorkoutSchema);

