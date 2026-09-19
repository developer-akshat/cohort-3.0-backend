import express from "express"
import authRoute from "./router/auth.router.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use("/api/auth",authRoute)
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hey Server is running successfully.")
})

export default app