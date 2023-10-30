import mongoose from "mongoose";

// Define the workout history schema
const workoutHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
    dailyWorkout: []
      
});

// Create the WorkoutHistory model
export const WorkoutHistory = mongoose.model('WorkoutHistory', workoutHistorySchema);

