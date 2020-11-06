import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../containers/Dashboard/Dashboard";

export default function Home() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/access/" />;
  }
  return <Dashboard />;
}
