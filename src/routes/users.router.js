import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: endpoints de gestión de usuarios
 */

/**
 * @swagger
 * /api/users/:
 *   get:
 *     summary: 'Retorna todos los usuarios cargados en la aplicación'
 *     tags: [Users]
 *     responses: 
 *       200:
 *         description: Retorna una lista de usuarios
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: 'Obtener usuarios por ID'
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses: 
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */

router.get('/',usersController.getAllUsers);

router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);


export default router;