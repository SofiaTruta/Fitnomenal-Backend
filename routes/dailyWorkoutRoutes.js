import express from "express"
import { choice, get, save }from "../controllers/dailyWorkoutsController.js";

const dailyWorkoutRouter = express.Router()

dailyWorkoutRouter.post('/new', choice)
dailyWorkoutRouter.get('/new', choice)
dailyWorkoutRouter.post('/newWorkout', save)
dailyWorkoutRouter.get('/get', get)

export default dailyWorkoutRouter