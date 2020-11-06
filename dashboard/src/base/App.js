import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes/routes";
import Header from "./app/containers/header/header";

export default function App() {
  return (
    <Router>
      <Header />
      <BaseRouter />
    </Router>
  );
}
