import { Router } from "express";
import userModel from "../../models/user.model.js";
import { generateTokens}  from "../../Utils/auth.js";

const router = Router()

// @POST /api/auth/register

router.post("/register",async(req,res)=>{
 
    const { name,email,password }  = req.body

    const isUserExist = await userModel.findOne({email})

    if(isUserExist){
        return res.status(400).json({
            message:"User already exist.",
            errors:{
                path:"email",
                message:"User already exist with this email"

            }
        })
    }

    const user = await userModel.create({
        name,
        email,
        passwordHash:password
    })

    const {accessToken,refreshToken} = generateTokens({userId : user._id})


    user.refreshToken = refreshToken

    await user.save()
    res.cookie("refreshToken", refreshToken,{
        httpOnly:true
    })
    res.status(200).json({
        message:"user registered successfully",
        data:{
            user:{
                name,
                email
            }
        },
        accessToken
    })
})

// @GET /api/auth/me

router.post("/me",async (req,res)=>{

    const accessToken = req.headers.authorization?.split(" ")[ 1 ]

})

export default router