import apiModel from "../../models/api.model.js"
import { generateapikey } from "../../Utils/apikey.utils.js"

const apiController = async(req,res)=>{
    const {name ,email, password } = req.body

    let apikey = generateapikey()
    
    const userAccount = await apiModel.create({
        name,
        email,
        password,
        key:apikey,
    })

    


  return  res.status(201).json({
        "message":"User Profile Created Sucessfully",
    })
    
}

export default apiController