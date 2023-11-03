import express, {Router} from "express";
import cors from 'cors'
import bodyParser from "body-parser"
import 'dotenv/config'
import userRouter from "../../routes/userRoutes.js";
import dailyWorkoutRouter from "../../routes/dailyWorkoutRoutes.js";
import workoutHistoryRouter from "../../routes/workoutHistoryRoutes.js";

const api = express()
const router = Router()

api.use(cors())
api.use(bodyParser.json())

//router
router.use('/users', userRouter)
router.use('/daily-workout', dailyWorkoutRouter)
router.use('/workout-history', workoutHistoryRouter)

api.use("/api/", router);
export const handler = serverless(api);
