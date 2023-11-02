import { DailyWorkout } from "../models/dailyWorkout.js";
import { WorkoutHistory } from "../models/workoutHistory.js";

//* SAVE THE WORKOUT TO THE WORKOUT HISTORY DB
const markWorkoutAsCompleted = async (req, res) => {
  const { userId } = req.body

  try {
    // Find the daily workout by ID
    const dailyWorkout = await DailyWorkout.findOne({
      userId: userId
    });

    if (!dailyWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Mark the workout as completed
    dailyWorkout.status = "completed";

    // Save the updated "in progress" workout
    await dailyWorkout.save();

    const now = new Date()
    // Create a new workoutHistory document for the completed workout
    const workoutHistory = new WorkoutHistory({
      userId: dailyWorkout.userId,
      date: now,
      status: "completed",
    });

    // Save the completed workout in the "WorkoutHistory" collection
    await workoutHistory.save();
    console.log('moved to workout history', workoutHistory)

    //delete the original dailyworkout
    await DailyWorkout.deleteOne({ "userId": dailyWorkout.userId })
    console.log('delete workout we dont want')

    res.sendStatus(200);
    
  } catch (error) {
    console.log('an error occurred', error)
    return res.status(500).json({ message: "An error occurred" });
  }
};

export { markWorkoutAsCompleted };

//* GET THE DATA FROM THE DB
const getWorkoutHistory = async (req, res) => {
  console.log(req.params);
  try {
    // Find all workout history records
    const workoutHistory = await WorkoutHistory.find({
      userId: req.params.email
    });
    console.log(workoutHistory);
    return res.status(200).json(workoutHistory);
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};
export { getWorkoutHistory };

//* DELETE THE WORKOUT FROM THE DB
const deleteWorkoutFromHistory = async (req, res) => {
  const { workoutId } = req.params;

  try {
    // Find the workout history record by ID and remove it
    const deletedWorkout = await WorkoutHistory.findByIdAndRemove(workoutId);

    if (!deletedWorkout) {
      return res.status(404).json({ message: "Workout history not found" });
    }

    return res.status(200).json({ message: "Workout history deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred" });
  }
};
export { deleteWorkoutFromHistory };
