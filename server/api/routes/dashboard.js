const express = require("express");
const router = express.Router();
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");
const DashboardController = require("../controllers/dashboard/dashboard");
const AnalyseController = require("../controllers/dashboard/analyse");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    var filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    }
    if (file.mimetype === "image/png") {
      filetype = "png";
    }
    if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "product-" + Math.random(200) + "." + filetype);
  },
});
/**
 *  Upload the product images!
 *  we have two product fields!
 */
const upload = multer({ storage: storage });

/****
 *  handel get requists!
 *
 */
router.get("/orders/:start/:limit/", DashboardController.orders_get_all_orders);
router.get("/users/:start/:limit/", DashboardController.users_get_all_users);
router.get(
  "/products/:start/:limit/",
  DashboardController.products_get_all_products
);
/***
 *
 *  Handel posts requests!
 *
 */
router.post(
  "/product/new/",
  checkAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  DashboardController.products_create_product
);
/***
 *
 *  handling the PATCH requests
 *  we will allow the product and the order.
 *
 */
router.patch(
  "/order/:Id/",
  checkAuth,
  DashboardController.orders_get_update_order
);
router.patch(
  "/product/:Id/",
  checkAuth,
  DashboardController.products_get_update_product
);

/****
 *
 *  DELETE
 *
 */
router.delete(
  "/product/:Id/",
  checkAuth,
  DashboardController.products_get_delete_product
);

/**
 *  This routers is only for analyse or charts
 *  this will return the numbers of the orders, users, activities!!
 *  ***************************
 *  Please Notice!
 *  The visitors Fields, we will add them at.\
 *
 *  for home page at ./controllers/products
 *  for Each product at ./controllers/products
 *
 */
router.get("/analyse/orders/", AnalyseController.analyse_orders);
router.get("/analyse/activity/", AnalyseController.analyse_activity);
router.get("/analyse/counters/", AnalyseController.analyse_counters);
module.exports = router;
