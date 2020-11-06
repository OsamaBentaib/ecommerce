import React, { Component } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export class AddToCartSuccess extends Component {
  render() {
    return (
      <div className="mb-4 mb-lg-5 alert alert-success" role="alert">
        <div className="d-flex align-items-center pr-3">
          <span className="mr-4">
            <BsCheckCircle size="25" />
          </span>
          <p className="mb-0">
            {this.props.addedItem} have been added to your cart.
            <br className="d-inline-block d-lg-none" />
            <Link
              to="/cart/"
              className="text-reset text-decoration-underline ml-lg-3"
            >
              View Cart
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default AddToCartSuccess;
