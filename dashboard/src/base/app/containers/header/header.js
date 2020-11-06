import React from "react";
import { Link } from "react-router-dom";
import { FiAlignCenter } from "react-icons/fi";
import { ReactComponent as Evin } from "./../../../../assets/svg/Evin.svg";

export default function Header() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <div></div>;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="topnav">
      <div className="container">
        <button
          className="navbar-toggler mr-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiAlignCenter />
        </button>
        <Link to="/" className="navbar-brand mr-auto">
          <Evin height="29" className="border-right pr-3 pb-3" />
          <span className="text-muted ml-2">
            {""}
            Dashboard
          </span>
        </Link>
        <div className="navbar-user">
          <Link
            to="/product/new/"
            className="list-inline-item mr-3 btn btn-primary"
          >
            New Product
          </Link>
        </div>
        <div
          className="collapse navbar-collapse mr-lg-auto order-lg-first"
          id="navbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/orders/" className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products/" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customers/" className="nav-link">
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
