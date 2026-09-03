const express = require("express")
const connectDB = require("./config/db")
const NotesModel = require("./models/note.model")

let app = express()
app.use(express.json())
let port = 3000 

connectDB()

app.get("/",(req,res)=>{
  res.send(`Server is running on port ${port}`)
})


app.post("/create",async (req,res)=>{

    let {title , description} = req.body
    
    const newNote = await NotesModel.create({
        title,
        description,
    })
    res.send({
        success:true,
        message:"Note created successfully",
        data: newNote,
    })
})
module.exports = app