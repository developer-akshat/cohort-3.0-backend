import {json, Router} from "express"

import apiController from "../controllers/api.controller.js"
const router = Router()


router.post("/register",apiController)

export default router