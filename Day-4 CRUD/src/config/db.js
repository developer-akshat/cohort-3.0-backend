const mongoose = require("mongoose")

 let connectDB = async ()=>{
     try {
        await mongoose.connect(process.env.mongoDB_URI)
        console.log("MongoDB is connected successfully.")
     } catch (error) {
        console.log("Error in connection in DB", error)
     }
 }

console.log("URI:", process.env.mongoDB_URI);

module.exports = connectDB