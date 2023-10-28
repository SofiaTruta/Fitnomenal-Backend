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

async function findByEmail(req, res) {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        res.status(200).json(user)
    } catch (error) {
        console.log('could not find a user with that email')
    }
}

async function newUser(req, res) {
    try {
        const now = new Date();

        let user = await User.findOne({
            email: req.body.email
        });

        if (user) {
            user = await User.findOneAndUpdate({
                email: req.body.email
            }, {
                lastLoggedIn: now
            });

            res.status(200).json(user)
        }

        if (!user) {
            try {
                user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    lastLoggedIn: now
                });
                await user.save();
                res.status(200).json({ user });
            } catch (error) {
                console.log('problems in the BE creating a new user', error);
                res.status(500).json({ error });
            }
        }
    } catch (error) {
        console.log('Error in newUser function:', error);
        res.status(500).json({ error });
    }
}



export const user = {
    showAll: showAllUsers,
    create: newUser,
    find: findByEmail
}