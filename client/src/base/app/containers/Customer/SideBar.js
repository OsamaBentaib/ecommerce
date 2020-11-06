import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SideBar extends Component {
  render() {
    const { orders, profile, addresses } = this.props;
    return (
      <div className="customer-sidebar card shadow-0">
        <nav className="list-group customer-nav">
          <Link
            to="?tab=orders"
            className={`${
              orders && "active"
            } list-group-item d-flex justify-content-between align-items-center`}
          >
            <span>Orders</span>
            <div className="badge badge-pill badge-light font-weight-normal px-3">
              5
            </div>
          </Link>
          <Link
            to="?tab=profile"
            className={`${
              profile && "active"
            } list-group-item pointer d-flex justify-content-between align-items-center`}
          >
            <span>Profile</span>
          </Link>
          <Link
            to="?tab=address"
            className={`${
              addresses && "active"
            } list-group-item pointer d-flex justify-content-between align-items-center`}
          >
            <span>Addresses</span>
          </Link>
          <Link
            to="/logout/"
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>Log out</span>
          </Link>
        </nav>
      </div>
    );
  }
}

export default SideBar;
