import apiModel from "../../models/api.model.js"

 const allowController = async(req,res)=>{
   
    const {allowedapis} = req.body
    const api = req.get("x-api-key")

    const user = await apiModel.findOne({key:api})

    if(!user){
        return res.status(404).json({
            "message":"API key not found"
        })

    }

    if(!api){
        return res.status(404).json({
            "message":"Please enter API key"
        })
    }
    

    user.allowedApis = [
        ...new  Set([...user.allowedApis || [], allowedapis])
    ]

    await user.save()

    return res.status(201).json({
        "message":`Allowed: ${allowedapis} api is saved successfully.`
    })

}

export default allowController