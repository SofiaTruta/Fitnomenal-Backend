import express from "express"
import { user } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get('/all', user.showAll)
userRouter.get('/find/:email', user.find) //added id so we can send email back
userRouter.post('/new', user.create)
userRouter.put('/update', user.update)

export default userRouter