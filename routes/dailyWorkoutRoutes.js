import express from "express"
import { choice, save }from "../controllers/dailyWorkoutsController.js";

const dailyWorkoutRouter = express.Router()

dailyWorkoutRouter.post('/new', choice)
dailyWorkoutRouter.get('/new', choice)
dailyWorkoutRouter.post('/newWorkout', save)

export default dailyWorkoutRouter