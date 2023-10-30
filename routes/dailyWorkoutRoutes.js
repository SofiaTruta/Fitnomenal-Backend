import express from "express"
import DailyWorkoutChoice from "../controllers/dailyWorkoutsController.js";

const dailyWorkoutRouter = express.Router()

dailyWorkoutRouter.post('/new', DailyWorkoutChoice)

export default dailyWorkoutRouter