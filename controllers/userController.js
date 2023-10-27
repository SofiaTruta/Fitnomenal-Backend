import '../config/database.js'
import { User } from '../models/user.js'

async function showAllUsers(req, res) {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        console.log('problems in the BE finding users', error)
    }
}

async function newUser(req, res){
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        })
        await user.save()
        console.log('new user created!')
        res.status(200).json({ user })
    } catch (error) {
        console.log('problems in the BE creating a new user', error)
    }
}

export const user = {
    showAll: showAllUsers,
    create: newUser
}