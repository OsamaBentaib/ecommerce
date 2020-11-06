import React from "react";
import { Redirect } from "react-router-dom";
import NewProductContainer from "../containers/NewProduct/NewProductContainer";
export default function CreateProduct() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/access/" />;
  }
  return <NewProductContainer />;
}
