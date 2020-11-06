const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const cartController = require('../controllers/cart');

// Handle incoming GET requests to /orders
router.get("/", checkAuth, cartController.cart_get_all);

router.get("/user/", checkAuth, cartController.cart_get_user_cart);

router.post("/", checkAuth, cartController.cart_create_cart_item);

router.patch("/:cartId/", checkAuth, cartController.cart_update_cart_item);

router.delete("/:cartId/", checkAuth, cartController.cart_delete_cart_item);

module.exports = router;