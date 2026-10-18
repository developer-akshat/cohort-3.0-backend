import mongoose from "mongoose";

 const db = new mongoose.Schema({
     name:{
        type:String,
     },
     email:{
      type:String,
      unique:true,
     },
       password:{
         type:String,
       },
       key: {
        type: String,
        unique: true,
        required: true
      },

    // APIs the user wants
    requestedApis: {
        type: [String],
        default: []
    },

    // APIs the user is permitted to use
    allowedApis: {
        type: [String],
        default: []
    }
 })

 const apiModel = mongoose.model("api validation",db)
 export default apiModel