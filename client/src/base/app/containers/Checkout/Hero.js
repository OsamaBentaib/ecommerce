import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/cart/">Cart</Link>
            </li>
            <li className="breadcrumb-item active">Checkout</li>
          </ol>
          <div className="hero-content">
            <h1 className="hero-heading">Checkout</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
