import { Router } from "express";
import requestController from "../../Controllers/request.controller.js";

const router = Router();



router.post("/request-access", requestController);

export default router;
