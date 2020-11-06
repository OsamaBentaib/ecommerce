import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsX } from "react-icons/bs";
import * as I from "./../../../store/constants";

export class WishlistProduct extends Component {
  render() {
    const {
      onhandelRemoveFromWishlist,
      onhandelAddToCart,
      addToCartLoading,
      item,
    } = this.props;
    return (
      <div className="cart-item">
        <div className="row d-flex align-items-center text-left text-md-center">
          <div className="col-12 col-md-5">
            <button className="cart-remove btn close mt-3 d-md-none">
              <BsX />
            </button>
            <div className="d-flex align-items-center">
              <Link to={`/product/${item.product._id}/`}>
                <img
                  className="cart-item-img"
                  src={`${I.PROXY_URL}/media/${item.product.image1}`}
                  alt="..."
                />
              </Link>
              <div className="cart-title text-left">
                <Link
                  to={`/product/${item.product._id}/`}
                  className="text-dark"
                >
                  <strong>{item.name}</strong>
                </Link>
                <br />
                <span className="text-muted text-sm">Size: {item.size}</span>
                <br />
                <span className="text-muted text-sm">Colour: {item.color}</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 mt-4 mt-md-0">
            <div className="row align-items-center">
              <div className="col-md-2">
                <div className="row">
                  <div className="col-6 d-md-none text-muted">
                    Price per item
                  </div>
                  <div className="col-6 col-md-12 text-right text-md-center">
                    ${item.product.price}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-6 d-md-none text-muted">Status </div>
                  <div className="col-6 col-md-12 text-right text-md-left">
                    <div className="badge p-lg-2 badge-primary">In Stock</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <button
                  onClick={() =>
                    onhandelAddToCart(
                      {
                        productId: item.product._id,
                        size: item.size,
                        color: item.color,
                        quantity: item.quantity,
                      },
                      item.product.name
                    )
                  }
                  className={`btn btn-outline-dark mt-4 mt-md-0 ${
                    addToCartLoading && "disabled"
                  }`}
                >
                  {addToCartLoading ? "Adding to Cart..." : "Add to cart"}
                </button>
              </div>
              <div className="col-2 d-none d-md-block text-center">
                <button
                  onClick={() =>
                    onhandelRemoveFromWishlist({ productId: item.product._id })
                  }
                  className="cart-remove text-muted btn"
                >
                  <BsX size="18" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WishlistProduct;
