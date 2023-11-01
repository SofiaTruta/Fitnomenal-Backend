import mongoose from "mongoose";

// Define the workout history schema
const workoutHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "completed",
  },
  exercises: []
});

// Create the WorkoutHistory model
export const WorkoutHistory = mongoose.model('WorkoutHistory', workoutHistorySchema);

