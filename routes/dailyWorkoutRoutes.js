import express from "express"
import choice from "../controllers/dailyWorkoutsController.js";

const dailyWorkoutRouter = express.Router()

dailyWorkoutRouter.post('/new', choice)
dailyWorkoutRouter.get('/new', choice)

export default dailyWorkoutRouter