import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import * as I from "./../../../store/constants";
export class CartModalItem extends Component {
  render() {
    const { item, onhandelRemoveFromCart } = this.props;
    return (
      <div className="navbar-cart-product">
        <div className="d-flex align-items-center">
          <Link to={`/product/${item.product._id}/`}>
            <img
              className="img-fluid navbar-cart-product-image mCS_img_loaded"
              src={`${I.PROXY_URL}/media/${item.product.image1}`}
              alt="..."
            />
          </Link>
          <div className="w-100">
            <span
              onClick={() => onhandelRemoveFromCart(item)}
              className="close btn"
            >
              <BsX />
            </span>
            <div className="pl-3">
              <Link
                to={`/product/${item.product._id}/`}
                className="navbar-cart-product-link text-dark link-animated"
              >
                {item.product.name}
              </Link>
              <small className="d-block text-muted">
                Quantity: {item.quantity}
              </small>
              <small className="d-block text-muted">Color: {item.color}</small>
              <small className="d-block text-muted">Size: {item.size} </small>
              <strong className="d-block text-sm">${item.product.price}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModalItem;
