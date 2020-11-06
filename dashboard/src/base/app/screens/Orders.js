import React from "react";
import { Redirect } from "react-router-dom";
import OrdersContainer from "../containers/Orders/OrdersContainer";

export default function Orders() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/access/" />;
  }
  return (
    <div className="container">
      <OrdersContainer />
    </div>
  );
}
