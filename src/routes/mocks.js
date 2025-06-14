import { Router } from "express";
import petsController from "../controllers/pets.controller.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.post('/generate/pet', petsController.generateFakePet);
router.post('/generate/user', usersController.generateFakeUser);

export default router