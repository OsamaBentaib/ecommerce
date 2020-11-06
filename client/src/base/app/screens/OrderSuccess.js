import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";

export class OrderSuccess extends Component {
  render() {
    return (
      <div>
        <section className="hero py-6">
          <div className="container">
            <ol className="breadcrumb pl-0 ">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Order placed</li>
            </ol>
            <div className="hero-content">
              <h1 className="hero-heading">Order placed</h1>
              <div>
                <div
                  role="alert"
                  className="d-flex align-items-center alert alert-success"
                >
                  <BsCheckCircle color="white" size="25" />
                  <span className="ml-2">Your order is placed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-6">
          <div className="container">
            <p className="lead">Thank you. Your order is placed.</p>
            <p className="lead mb-5">
              Your order hasn't shipped yet but we will tell you when it does.
            </p>
            <p className="mb-6">
              <Link to="/customer/" className="btn btn-outline-dark">
                View or manage your orders
              </Link>
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default OrderSuccess;
