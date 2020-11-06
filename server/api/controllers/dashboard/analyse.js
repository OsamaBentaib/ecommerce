const Order = require("../../models/order");
const Product = require("../../models/product");
const User = require("../../models/user");
const DeletedUser = require("../../models/deletedUsers");
const Visitors = require("../../models/visitors");
const moment = require("moment");
const days = [...new Array(30)].map((i, idx) =>
  moment().startOf("day").subtract(idx, "days")
);
const lastThirtyDays = days.slice().sort((e, i) => {
  return -1;
});
exports.analyse_users = async (req, res, next) => {
  try {
    const today = new Date().toISOString();
    const query = moment(today).format("YYYY-MM-DD");
    const NewUsers = await User.countDocuments({
      joinedAt: { $regex: query, $options: "i" },
    });
    return res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
};
exports.analyse_activity = async (req, res, next) => {
  try {
    let response = [];
    for (let i = 0; i < lastThirtyDays.length; i++) {
      const e = lastThirtyDays[i];
      const query = moment(e).format("YYYY-MM-DD");
      const users = await User.countDocuments({
        joinedAt: { $regex: query, $options: "i" },
      });
      const deletedUsers = await DeletedUser.countDocuments({
        date: { $regex: query, $options: "i" },
      });
      const visitors = await Visitors.countDocuments({
        date: { $regex: query, $options: "i" },
      });
      const cs = {
        labels: moment(e).format("DD MMM"),
        users: users,
        deletedUsers: deletedUsers,
        visitors: visitors,
      };
      response.push(cs);
    }
    return res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
};
exports.analyse_orders = async (req, res, next) => {
  try {
    let analyse = [];
    for (let i = 0; i < lastThirtyDays.length; i++) {
      const e = lastThirtyDays[i];
      const query = moment(e).format("YYYY-MM-DD");
      const total = await Order.countDocuments({
        date: { $regex: query, $options: "i" },
      });
      const cs = {
        date: moment(e).format("DD MMM"),
        total: total,
      };
      analyse.push(cs);
    }
    const bp = await Order.countDocuments({ status: "Being prepared" });
    const shipped = await Order.countDocuments({ status: "Shipped" });
    const cancled = await Order.countDocuments({ status: "Cancled" });
    const resp = { analyse, bp, shipped, cancled };
    return res.status(200).json({ response: resp });
  } catch (error) {
    console.log(error);
  }
};

exports.analyse_counters = async (req, res, next) => {
  try {
    const total = await Order.find().select("total");
    let sallers = 0;
    for (let i = 0; i < total.length; i++) sallers = sallers + total[i].total;
    const products = await Product.countDocuments();
    const users = await User.countDocuments();
    const orders = await Order.countDocuments();
    const response = {
      orders: orders,
      products: products,
      users: users,
      sallers: sallers,
    };
    console.log(response);
    return res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
};
