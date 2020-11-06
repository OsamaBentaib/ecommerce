import React from "react";
import { Redirect } from "react-router-dom";
import UserContainer from "../containers/Customers/CustomersContainer";
export default function Customers() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/access/" />;
  }
  return (
    <div className="container">
      <UserContainer />
    </div>
  );
}
