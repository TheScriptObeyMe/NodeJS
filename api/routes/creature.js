const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const CreatureController = require('../controllers/creature');

// Handle incoming GET requests to /orders
router.get("/", /*checkAuth,*/ CreatureController.creature_get_all);

//router.post("/", checkAuth, CreatureController.creature_create);

//router.get("/:orderId", checkAuth, OrdersController.orders_get_order);

//router.delete("/:orderId", checkAuth, OrdersController.orders_delete_order);

module.exports = router;