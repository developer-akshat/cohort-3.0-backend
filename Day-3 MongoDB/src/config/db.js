const { default: mongoose } = require("mongoose")

const connectDB = async ()=>{
    try {
        await mongoose.connect(
            "MongoDB Connection URL")
            console.log("DB is connected sucessfully")
    } catch (error) {
        console.log("Error in connecting with DB", error)
        
    }
 }

 module.exports = connectDB
