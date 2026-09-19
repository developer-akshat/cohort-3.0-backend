import app from "./src/app.js"
import { configDotenv } from "dotenv"
import connectToDB from "./src/config/db.js"
import { connect } from "mongoose"

configDotenv()
await connectToDB()

app.listen(process.env.PORT,()=>{
    console.log("Server is running")
})
