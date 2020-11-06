import React from "react";
import { Route } from "react-router-dom";
import Home from "./../app/screens/home";
import Wishlist from "./../app/screens/wishlist";
import Cart from "../app/screens/cart";
import Checkout from "../app/screens/checkout";
import Customer from "../app/screens/Customer";
import Login from "../auth/screens/Login";
import Signup from "../auth/screens/Signup";
import Logout from "../auth/screens/Logout";
import Product from "../app/screens/product";
import Shop from "../app/screens/shop";
import { OrderSuccess } from "../app/screens/OrderSuccess";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/wishlist/" component={Wishlist} />
    <Route path="/cart/" component={Cart} />
    <Route path="/checkout/" component={Checkout} />
    <Route path="/customer/" component={Customer} />
    <Route path="/order_success/" component={OrderSuccess} />
    <Route path="/product/:id/" render={(props) => <Product {...props} />} />
    <Route path="/shop/" render={(props) => <Shop {...props} />} />
    {/* AUTH */}
    <Route path="/login/" component={Login} />
    <Route path="/signup/" component={Signup} />
    <Route path="/logout/" component={Logout} />
  </div>
);

export default BaseRouter;
