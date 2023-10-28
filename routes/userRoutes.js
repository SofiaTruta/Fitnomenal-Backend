import express from "express"
import { user } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get('/all', user.showAll)
userRouter.get('/find', user.find)
userRouter.post('/new', user.create)

export default userRouter