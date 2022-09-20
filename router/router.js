import { Router } from "express";
import controller from "../controller/controller.js";


const router = Router()

router.get('/base', controller.GET)
router.get('/donators', controller.DONATORS)
router.post('/donation', controller.POST)


export default router