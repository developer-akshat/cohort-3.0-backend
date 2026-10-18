import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGOURI)
    }
    catch(error){
        console.log("DB connection failed",error)
    }
    console.log("DB Connected successfully")
}

export default connectDB
