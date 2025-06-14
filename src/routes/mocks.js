import { Router } from "express";
import petsController from "../controllers/pets.controller.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

router.get('/generate/pet', petsController.generateFakePet);
router.get('/generate/user', usersController.generateFakeUser);

export default router