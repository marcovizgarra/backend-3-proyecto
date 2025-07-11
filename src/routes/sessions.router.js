import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: Endpoints de registro, login y sesión de usuario
 */

/**
 * @swagger
 * /api/sessions/register:
 *   post:
 *     summary: Registro de usuario
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - email
 *               - password
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario registrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 payload:
 *                   type: string
 *                   example: user_id
 *       400:
 *         description: Datos incompletos o usuario existente
 */

/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: Login de usuario
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *         headers:
 *           Set-Cookie:
 *             description: Cookie de sesión (cookies)
 *             schema:
 *               type: string
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Logged in
 *       400:
 *         description: Contraseña incorrecta
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/sessions/current:
 *   get:
 *     summary: Obtener usuario actual desde cookie
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 payload:
 *                   type: object
 */

/**
 * @swagger
 * /api/sessions/unprotectedLogin:
 *   get:
 *     summary: Login sin sesión
 *     tags: [Sessions]
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: password
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       400:
 *         description: Datos incompletos
 *       404:
 *         description: Usuario no encontrado
 */

//
router.post('/register',sessionsController.register);
router.post('/login',sessionsController.login);
router.get('/current',sessionsController.current);
router.get('/unprotectedLogin',sessionsController.unprotectedLogin);
router.get('/unprotectedCurrent',sessionsController.unprotectedCurrent);

export default router;