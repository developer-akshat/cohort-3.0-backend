const express = require("express");
const NoteSchema = require("./model/note.model");
const connectDB = require("../src/config/db");
const NoteModel = require("./model/note.model");
const notesRoute = require("./routes/note.router")
const { createNotesController } = require("./controller/notes.controller");

let app = express()
app.use(express.json())

connectDB() 

app.use("/notes",notesRoute)



app.get("/", (req,res)=>{
 
    res.send("Ok got it and your server is running perfectly.")
})

module.exports = app