import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Hero extends Component {
  render() {
    const { length } = this.props;
    return (
      <section className="hero mt-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Shopping cart</li>
          </ol>
          <div className="hero-content">
            <h1 className="hero-heading">Shopping cart</h1>
            <div>
              <p className="lead text-muted">
                You have {length === 0 ? " no " : length} items in your cart.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
