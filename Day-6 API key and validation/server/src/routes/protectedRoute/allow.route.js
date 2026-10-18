import {Router} from "express"
import allowController from "../../controllers/allow.controller.js"

const router = Router()

router.post("/allowapi",allowController)

export default router