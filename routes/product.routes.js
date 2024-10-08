const express = require("express");
const router = express.Router();

const { findAll, findOne, create, update, remove } = require("../controllers/product.controller");

/**
 * @swagger
 * components:
 *  schemas:
 *    Skates:
 *      modelskate: 
 *          type: string
 *        price:
 *          type: number
 *        description:
 *          type: string
 *          stock:
 *            type: number
 *              brand:
 *                type: string
 *              color:
 *                type: string
 *      example:
 *        skates: [
 *          {
 *            "modelskate": "Shortboard",
 *            "price": 18900,
 *            "description": "incluye deck, rodamientos y ruedas.",
 *            "stock": 27,
 *            "brand": "Element",
 *            "color": "Negro", 
 *          },
 *          {
  *            "modelskate": "Longboard",
 *            "price": 58900,
 *            "description": "incluye deck, rodamientos y ruedas.",
 *            "stock": 12,
 *            "brand": "Emerica",
 *            "color": "Blanco",
 *          }
 *        ]
 */

/**
 * @swagger
 * /api/skates/readall:
 *   get:
 *     summary: Obtiene todas loss skates disponibles
 *     tags: [Skates]
 *     responses:
 *       200:
 *         description: Lista de todas los skates
 *       400:
 *         description: Error al obtener los skates
 */

router.get("/", findAll);

/**
 * @swagger
 * /api/skates/readone/{slug}:
 *   get:
 *     summary: Obtiene una skate por slug
 *     tags: [Skates]
 *     parameters:
 *       - in: path
 *         name: slug
 *         schema:
 *           type: string
 *         required: true
 *         description: Slug del skate
 *     responses:
 *       200:
 *         description: Datos del skate
 *       400:
 *         description: Error al obtener el skate
 */
router.get("/:id", findOne);
/**
 * @swagger
 * /api/skates/create:
 *   post:
 *     summary: Crea un nuevo skate
 *     tags: [Skates]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skate'
 *     responses:
 *       200:
 *         description: El skate se creó con éxito
 *       400:
 *         description: Error al crear el skate
 */

router.post("/", create);

/**
 * @swagger
 * /api/skates/{id}:
 *   put:
 *     summary: Actualiza un skate por ID
 *     tags: [Skates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del skate a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skate'
 *     responses:
 *       200:
 *         description: El skate se actualizó con éxito
 *       400:
 *         description: Error al actualizar el skate
 */
router.put("/:id", update);

/**
 * @swagger
 * /api/skates/{id}:
 *   delete:
 *     summary: Elimina un skate por ID
 *     tags: [Skates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del skate a eliminar
 *     responses:
 *       200:
 *         description: El skate se eliminó con éxito
 *       400:
 *         description: Error al eliminar el skate
 */
router.delete("/:id", remove);

module.exports = router;