import express from "express"
import connectDB from "./config/db.config.js"
import apikey from "./routes/api.route.js"
import accessRouter from "./routes/protectedRoute/request.route.js";
import protectedRouter from "./routes/protectedRoute/allowed.route.js";
import allowRouter from "./routes/protectedRoute/allow.route.js"

const app = express()

connectDB()
app.use(express.json())
app.get("/", (req,res)=>{ 
  
    res.send( "Sever is running")
} )
app.use("/api",allowRouter)
app.use("/api",  accessRouter);
app.use("/api/v1", protectedRouter);

app.use("/api/user",apikey)
export default app


