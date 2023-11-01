import express from "express";
import {
  getWorkoutHistory,
  deleteWorkoutFromHistory,
  markWorkoutAsCompleted
} from "../controllers/workoutHistoryController.js";

const workoutHistoryRouter = express.Router();

// Get workout history
workoutHistoryRouter.get('/history/:email', getWorkoutHistory);

// Create a new route for marking a workout as completed
workoutHistoryRouter.post('/markCompleted/:workoutId', markWorkoutAsCompleted);

// Delete a workout from history
workoutHistoryRouter.delete('/delete/:workoutId', deleteWorkoutFromHistory);

export default workoutHistoryRouter;






