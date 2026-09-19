import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[2, "Name must have at least 2 characters."],
        maxlength:[50, "Name does not contain more than 50 characters."],

    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    },
    passwordHash:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String,
    }
})

const userModel = mongoose.model("User",userSchema)
export default userModel