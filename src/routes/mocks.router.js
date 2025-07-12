import { Router } from "express";
import petsController from "../controllers/pets.controller.js";
import usersController from "../controllers/users.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Mock routes
 *   description: Endpoints para generar usuarios y mascotas falsos
 */

/**
 * @swagger
 * /api/mocks/generate/pet:
 *   get:
 *     summary: Genera una lista de mascotas falsas (sin insertarlas en la base de datos)
 *     description: Devuelve un array de objetos con mascotas utilizando datos falsos generados por faker.js (NO GUARDA EN LA BASE DE DATOS)
 *     tags: [Mock routes]
 *     parameters:
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: integer
 *         required: false
 *         description: Cantidad de usuarios a generar
 *     responses:
 *       200:
 *         description: Lista de mascotas generadas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pets:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       specie:
 *                         type: string
 *                         enum: [dog, cat]
 *                       birthDate:
 *                         type: string
 *                         format: date
 *                       image:
 *                         type: string
 */

/**
 * @swagger
 * /api/mocks/generate/user:
 *   get:
 *     summary: Genera un usuario falso
 *     description: Devuelve un objeto de usuario generado con datos aleatorios utilizando faker.js.
 *     tags:
 *       - Mock routes
 *     parameters:
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: integer
 *         required: false
 *         description: Cantidad de usuarios a generar
 *     responses:
 *       200:
 *         description: Usuario generado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     age:
 *                       type: integer
 */


/**
 * @swagger
 * /api/mocks/generateData/pet:
 *   post:
 *     summary: Genera e inserta mascotas falsas en la base de datos
 *     tags: [Mock routes]
 *     description: Crea una cantidad definida de mascotas con datos falsos y las inserta en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: Mascotas insertadas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Datos insertados correctamente
 *       400:
 *         description: Valores incompletos
 */

/**
 * @swagger
 * /api/mocks/generateData/user:
 *   post:
 *     summary: Genera e inserta usuarios falsos en la base de datos
 *     tags: [Mock routes]
 *     description: Genera múltiples usuarios falsos e inserta cada uno en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 15
 *     responses:
 *       200:
 *         description: Usuarios insertados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Usuarios generados e insertados correctamente
 *       400:
 *         description: Valores incompletos
 */

router.get('/generate/pet', petsController.generateFakePet);
router.get('/generate/user', usersController.generateFakeUser);
router.post('/generateData/pet', petsController.generateAndInsertPets);
router.post('/generateData/user', usersController.generateAndInstertUser);

export default router