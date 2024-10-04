const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization');

const { findAll, findOne, create, update, remove } = require("../controllers/user.controller");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *        name:
 *          type: string
 *        username:
 *          type: string
 *          password:
 *            type: string
 *        active:
 *          type: boolean
 *      example:
 *        name: "Mike"
 *        username: "mike707"
 *        password: "Meximike123"
 *        active: "true"
 */



/**
 * @swagger
 * /guest:
 *   get:
 *     summary: Obtener todos los usuarios existentes
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios existentes obtenida con éxito
 */
router.get("/", auth, findAll);

/**
 * @swagger
 * /guest/{id}:
 *   get:
 *     summary: Obtener un usuario en especifico
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: username
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario especifico obtenido con éxito
 */
router.get("/:id", auth, findOne);

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: El usuario se creó correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post("/", auth, create);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 */
router.put("/:id", auth, update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 */
router.delete("/:id", auth, remove);

module.exports = router;