import { DailyWorkout } from "../models/dailyWorkout";
import { WorkoutHistory } from "../models/workoutHistory";

//* SAVE THE WORKOUT TO THE WORKOUT HISTORY DB
const markWorkoutAsCompleted = async (req, res) => {
  const { workoutId } = req.params;

  try {
    // Find the daily workout by ID
    const dailyWorkout = await DailyWorkout.findById(workoutId);

    if (!dailyWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Mark the workout as completed
    dailyWorkout.status = "completed";

    // Save the updated "in progress" workout
    await dailyWorkout.save();

    // Create a new workoutHistory document for the completed workout
    const workoutHistory = new WorkoutHistory({
      userId: dailyWorkout.userId,
      date: dailyWorkout.date,
      status: "completed",
    });

  // Save the completed workout in the "WorkoutHistory" collection
  await workoutHistory.save();
  }
}
