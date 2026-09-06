const NoteModel = require("../model/note.model")

// Create 
const createNotesController = async (req,res) =>{

    try {
         let {title,description} = req.body;
  
  let allNotes = await NoteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message:"Note Created Successfully"
  })
}
  catch (error) {
        res.status(500).json({
            message:"Something went wrong with server."
        })
    }
}

// Read All 

const getAllnotesController = async (req,res)=>{
 
    try {
        let allNotes = await NoteModel.find()

     res.status(200).json({
            message:"All Note fetched successfully",
            data:allNotes,
        })
    } catch (error) {
        res.status(500).json({
            message:"Error in getting notes"
        })
    }
}



// Read 

const getSingleNoteController = async (req,res) => {
   
    try {
        let noteID = req.params.id;
        let note = await NoteModel.findById(noteID)

        res.status(200).json({
            message:"Note fetched successfully",
            data:note,
        })

    } catch (error) {
        res.status(500).json({
            message:"Error in getting notes"
        })
    }
}


// Update via PUT 

const updatenotesController  = async (req,res) =>{
   try {
    
    let noteId = req.params.id
    let body = req.body

    let updatedNote = await NoteModel.findByIdAndUpdate(noteId,body,{
        new:true,
    })

    return res.status(200).json({
        message:"Note updated Successfully.",
        data : updatedNote,
    })
   } catch (error) {

    return res.status(500).json({
        message:"Error while updating"
    })
    
   }
}


//  Delete  

const noteDeleteController = async (req,res)=>{
    try {
        let Noteid = req.params.id;
    
    let deleteNote = await NoteModel.findByIdAndDelete(Noteid)

    res.status(200).json({
        message:"Your Notes deleted Successfully.",
        data : deleteNote,
    })
    } catch (error) {

        res.status(500).json({
            message:"Error in deleting the note.",
            error
        })
        
    }
}

module.exports = {
    createNotesController,
    getSingleNoteController,
    getAllnotesController,
    updatenotesController,
    noteDeleteController

}
   
