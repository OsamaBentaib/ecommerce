const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const addressController = require('../controllers/addresses');

// Handle incoming GET requests to /orders
router.get("/user/", checkAuth, addressController.addresses_get_user_address);

router.post("/", checkAuth, addressController.addresses_create_address);

router.delete("/:addressId/", checkAuth, addressController.addresses_delete_address);

module.exports = router;