import express from "express";
import cors from 'cors'
import bodyParser from "body-parser"
import 'dotenv/config'
import userRouter from "./routes/userRoutes.js";
import dailyWorkoutRouter from "./routes/dailyWorkoutRoutes.js";
import workoutHistoryRouter from "./routes/workoutHistoryRoutes.js";
import { randomiser } from "./utilities/randomiserFunction.js";


const app = express()

app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//router
app.use('/users', userRouter)
app.use('/daily-workout', dailyWorkoutRouter)


