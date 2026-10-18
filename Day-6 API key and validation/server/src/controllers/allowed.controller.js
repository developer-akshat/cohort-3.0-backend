import apiModel from "../../models/api.model.js"

const supportedapi = ["weather", "products", "health"]

const allowedController = async(req,res)=>{ 

    const { apiName } = req.params

    const validateapi = req.get("x-api-key")

    if(!validateapi){
        return res.send(401).json({
            "message":"API key is required"
        })
    }

    const user = await apiModel.findOne({
        key : validateapi
    })

    if(!user){
        return res.status(401).json({
            "message":"Invalid API key"
        })
    }

    if(!supportedapi.includes(apiName)){
        return res.send(404).json({
            "message":`API ${apiName} not found`
        })
    }

    if(!user.allowedApis.includes(apiName)){
        return res.status(403).json({
            "message":`Forbidden: Access to ${apiName} is not allowed.`
        })
    }

    return res.status(200).json({
      message: "Access granted",
      api: apiName,
      data: {
        example: `This is sample ${apiName} API data`
      }
    });



}

export default allowedController