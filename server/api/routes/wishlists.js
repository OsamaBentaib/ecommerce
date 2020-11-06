const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const wishlistController = require('../controllers/wishlists');

// Handle incoming GET requests to /orders
router.get("/", checkAuth, wishlistController.wishlists_get_all);

router.get("/user/", checkAuth, wishlistController.wishlists_get_user_wishlist);

router.post("/", checkAuth, wishlistController.wishlist_create_or_remove_wishlist_item);

module.exports = router;