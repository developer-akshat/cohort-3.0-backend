const { default: mongoose } = require("mongoose")

const connectDB = async ()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://gamertech275_db_user:Akshat-123@cohort3.xfs89ds.mongodb.net/")
            console.log("DB is connected sucessfully")
    } catch (error) {
        console.log("Error in connecting with DB", error)
        
    }
 }

 module.exports = connectDB