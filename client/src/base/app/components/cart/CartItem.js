import React, { Component } from "react";
import { BsX, BsPlus, BsDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as I from "./../../../store/constants";
export class CartItem extends Component {
  render() {
    const {
      onhandelRemoveFromCart,
      item,
      onhandelQuantityPlus,
      onhandelQuantityMines,
    } = this.props;
    return (
      <div className="cart-item">
        <div className="row d-flex align-items-center text-left text-md-center">
          <div className="col-12 col-md-5">
            <button className="cart-remove btn close mt-3 d-md-none">
              <BsX size="19" />
            </button>
            <div className="d-flex align-items-center">
              <Link to="/product/1/">
                <img
                  className="cart-item-img"
                  src={`${I.PROXY_URL}/media/${item.product.image1}`}
                  alt="..."
                />
              </Link>
              <div className="cart-title text-left">
                <Link to="/product/1/" className="text-dark link-animated">
                  <strong>
                    {item.product.name} {item.quantity}
                  </strong>
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
              <div className="col-md-3">
                <div className="row">
                  <div className="col-6 d-md-none text-muted">
                    Price per item
                  </div>
                  <div className="col-6 col-md-12 text-right text-md-center">
                    ${item.product.price}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row align-items-center">
                  <div className="d-md-none col-7 col-sm-9 text-muted">
                    Quantity
                  </div>
                  <div className="col-5 col-sm-3 col-md-12">
                    <div className="d-flex align-items-center">
                      <div className="btn btn-items btn-items-decrease">
                        <button
                          onClick={() => onhandelQuantityMines(item)}
                          className="cart-mines btn"
                        >
                          <BsDash size="17" />
                        </button>
                      </div>
                      <input
                        className="form-control text-center border-0 border-md input-items"
                        type="text"
                        defaultValue={item.quantity}
                      />
                      <div className="btn btn-items btn-items-increase">
                        <button
                          onClick={() => onhandelQuantityPlus(item)}
                          className="cart-plus btn"
                        >
                          <BsPlus size="17" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-6 d-md-none text-muted">Total price </div>
                  <div className="col-6 col-md-12 ml-3 text-right text-md-center">
                    ${item.product.price * item.quantity}
                  </div>
                </div>
              </div>
              <div className="col-2 d-none d-md-block text-center">
                <button
                  onClick={() => onhandelRemoveFromCart(item)}
                  className="cart-remove btn close"
                >
                  <BsX size="19" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
