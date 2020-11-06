import React from "react";
import { Route } from "react-router-dom";

import Login from "./../auth/screens/login";
import Home from "./../app/screens/home";
import Orders from "../app/screens/Orders";
import Products from "../app/screens/Products";
import CreateProduct from "../app/screens/CreateProduct";
import Customers from "../app/screens/Customers";
const BaseRouter = () => (
  <div>
    <Route path="/access/" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/orders/" component={Orders} />
    <Route exact path="/products/" component={Products} />
    <Route exact path="/customers/" component={Customers} />
    <Route exact path="/product/new/" component={CreateProduct} />
  </div>
);

export default BaseRouter;
