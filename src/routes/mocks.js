import { Router } from "express";
import petsController from "../controllers/pets.controller.js";

const router = Router();

router.post('/generate/pet', petsController.generateFakePet)

export default router