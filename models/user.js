import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    lastLoggedIn: Date,
    weight:{
        type: Number
    },
    height:{
        type: Number
    },
    goalWeight:{
        type: Number
    }
})

export const User = mongoose.model('User', userSchema)