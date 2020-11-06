import React from "react";
import { Redirect } from "react-router-dom";
import ProductsContainer from "../containers/Products/ProductsContainer";

export default function Products() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/access/" />;
  }
  return (
    <div className="container">
      <ProductsContainer />
    </div>
  );
}
