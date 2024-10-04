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
 *        modelskate: "Shortboard"
 *        cu: "USD"
 *        prices: [
 *          {
 *            "size": "Familiar",
 *            "price": 18900,
 *            "description": "incluye 12 rebanadas."
 *          },
 *          {
 *            "size": "Individual",
 *            "price": 9900,
 *            "description": "incluye 6 rebanadas."
 *          }
 *        ]
 */

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

module.exports = router;