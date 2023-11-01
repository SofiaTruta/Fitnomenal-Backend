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
    const email = req.params.email
    try {
        const user = await User.findOne({
            email: email //updated so we can actually get the email back in the fetch
        })
        res.status(200).json(user)
    } catch (error) {
        console.log('could not find a user with that email')
    }
}

// update user details
async function updateUser(req, res) {
    console.log(req.body);
    try {
       await User.updateOne({
            "email": req.body.email 
        }, {
            name: req.body.name,
            weight: parseFloat(req.body.weight),
            height: parseFloat(req.body.height),
            goalWeight: parseFloat(req.body.goalWeight),
            firstLoggin: "false" // added so we can redirect if first loggin
        }
        )
        res.status(200)
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
                lastLoggedIn: now,
            });

            res.status(200).json(user)
        }

        if (!user) {
            try {
                user = new User({
                    name: req.body.name,
                    email: req.body.email,
                    lastLoggedIn: now,
                    height: 0,
                    weight: 0,
                    goalWeight: 0,
                    firstLoggin: "true" // added so we can redirect if first loggin
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
    find: findByEmail,
    update: updateUser
}