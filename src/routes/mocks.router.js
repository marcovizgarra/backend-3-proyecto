import { Router } from "express";
import petsController from "../controllers/pets.controller.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

// /**
//  * @swagger
//  * tags:
//  *  name: 'Mock Users'
//  *  description: 'Creación de usuarios con faker.js'
//  */

// /**
//  * @swagger
//  * /generateData/user
//  *  post:
//  *  summary: 'Crear un usuario aleatorio e insertarlo en la base de datos'
//  *      tags: [Users]
//  *      requestBody:
//  *          required: true
//  *          content:
//  *              application/json:
//  *                  schema:
//  *                  type: object
//  *                  required: true
//  *                  - username
//  *                  - email
//  *                  properties:
//  *                  username:
//  *                      type: string
//  *                  email:
//  *                      type: string
//  *      responses:
//  *          201:
//  *              description: 'Usuario creado correctamente'
//  */

router.get('/generate/pet', petsController.generateFakePet);
router.get('/generate/user', usersController.generateFakeUser);
router.post('/generateData/pet', petsController.generateAndInsertPets);
router.post('/generateData/user', usersController.generateAndInstertUser);

export default router