import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Hero extends Component {
  render() {
    const { loading, length } = this.props;
    return (
      <section className="hero">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Wishlist</li>
          </ol>
          <div className="hero-content">
            <h1 className="hero-heading">Wishlist</h1>
            <div>
              <p className="lead text-muted">
                {!loading && `You have ${length} items in your wishlist.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
