const express = require("express")
const { createNotesController, getSingleNoteController, getAllnotesController, updatenotesController, noteDeleteController } = require("../controller/notes.controller")

const router = express.Router()

// Create 

router.post("/create",createNotesController)

// READ All

router.get("/allNotes",getAllnotesController)

// READ One

router.get("/:id",getSingleNoteController)

// Update 

router.put("/:id", updatenotesController)

// Delete 

router.delete("/:id",noteDeleteController)

module.exports = router;