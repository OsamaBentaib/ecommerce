import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCart,
  updateCart,
  removeFromCart,
} from "./../../../store/actions/cart";
import { Link, Redirect } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CartItem from "../../components/cart/CartItem";
import Hero from "./Hero";
import EmptyCart from "../../components/cart/EmptyCart";
import CartLoading from "../../components/Loading/CartLoading";

export class CartContainer extends Component {
  onhandelRemoveFromCart = (item) => {
    this.props.removeFromCart(item);
  };
  onhandelQuantityPlus = (item) => {
    this.props.updateCart(item, 1);
  };
  onhandelQuantityMines = (item) => {
    if (item.quantity - 1 !== 0) {
      this.props.updateCart(item, -1);
    }
  };
  componentDidMount() {
    this.props.fetchCart();
  }
  render() {
    const { shoppingCart, loading, cartEmpty, token } = this.props;
    let subtotal = 0;
    let shipping = 0;
    let totale = shipping;
    if (shoppingCart !== undefined) {
      shoppingCart.forEach((ele) => {
        if (ele !== undefined) {
          return (subtotal += ele.quantity * ele.product.price);
        }
      });
      shipping = 10.99;
      totale += subtotal + shipping;
      totale = totale.toFixed(2);
      subtotal = subtotal.toFixed(2);
    }
    if (!token) {
      return <Redirect to="/login/?next=/cart/" />;
    }
    return (
      <div>
        <Hero length={shoppingCart.length} />
        <section>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-8 pr-xl-5">
                <div className="cart mb-5">
                  <div className="cart-body">
                    {loading && <CartLoading />}
                    {!loading && cartEmpty && <EmptyCart />}
                    {shoppingCart.map((item, index) => {
                      if (item !== undefined) {
                        console.log(item);
                        return (
                          <CartItem
                            key={index + item._id}
                            item={item}
                            onhandelRemoveFromCart={this.onhandelRemoveFromCart}
                            onhandelQuantityPlus={this.onhandelQuantityPlus}
                            onhandelQuantityMines={this.onhandelQuantityMines}
                            onhandelremoveFromCart={this.onhandelremoveFromCart}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
                <div className="d-flex justify-content-between flex-column flex-lg-row mb-5 mb-lg-0">
                  <Link to="/shop/" className="btn btn-link text-muted">
                    <span className="icon-md">
                      <BsArrowLeft size="16" className="mr-1" />
                    </span>
                    <span>
                      Continue Shopping{" "}
                      <span role="img" aria-label="😊">
                        😊
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-5 shadow-0 border">
                  <div className="card-header">
                    <h6 className="mb-0">Order Summary</h6>
                  </div>
                  <div className="card-body py-4">
                    <p className="text-muted text-sm">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <table className="table card-text">
                      <tbody>
                        <tr>
                          <th className="py-4">Order Subtotal </th>
                          <td className="py-4 text-right text-muted">
                            ${subtotal === 0 ? "0" : subtotal}
                          </td>
                        </tr>
                        <tr>
                          <th className="py-4">Shipping and handling</th>
                          <td className="py-4 text-right text-muted">
                            ${shipping}
                          </td>
                        </tr>
                        <tr>
                          <th className="py-4">Tax</th>
                          <td className="py-4 text-right text-muted">$0.00</td>
                        </tr>
                        <tr>
                          <th className="pt-4">Total</th>
                          <td className="pt-4 text-right h3 font-weight-normal">
                            ${totale}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="w-100">
                      {totale === 0 ? (
                        <button
                          disabled={true}
                          className={`btn w-100 btn-dark btn-block disabled`}
                        >
                          <span>Checkout</span>
                        </button>
                      ) : (
                        <Link
                          to="/checkout/"
                          className="btn w-100 btn-dark btn-block"
                        >
                          <span>Checkout</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.cart.shoppingCart,
    loading: state.cart.cartLoading,
    cartEmpty: state.cart.cartEmpty,
    error: state.cart.cartError,
    token: state.auth.token,
  };
};
export default connect(mapStateToProps, {
  fetchCart,
  updateCart,
  removeFromCart,
})(CartContainer);
