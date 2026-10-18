import {Router} from "express"
import allowedController from "../../controllers/allowed.controller.js"

const router = Router()


router.get("/:apiName",allowedController)

export default router

