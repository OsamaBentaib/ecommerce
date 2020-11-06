const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const MONGO_CONNECTION = require("./db/db");

const checkAuth = require("./api/middleware/check-auth");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const wishlistRoutes = require("./api/routes/wishlists");
const cartRoutes = require("./api/routes/cart");
const authRoutes = require("./api/routes/auth");
const addressRoutes = require("./api/routes/address");
const dashboardRoutes = require("./api/routes/dashboard");

mongoose
  .connect(
    MONGO_CONNECTION,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected 🚀 To MongoDB Successfully");
  });
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(checkAuth);
// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/wishlists", wishlistRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);
app.use("/address", addressRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/media", express.static(process.cwd() + "/public/images/"));

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
