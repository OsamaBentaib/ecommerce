import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCart, removeFromCart } from "./../../../store/actions/cart";
import { BsX } from "react-icons/bs";
import { Link, Redirect } from "react-router-dom";
import CartModalItem from "../../components/cart/CartModalItem";
import CartModalItemLoading from "../../components/Loading/CartModalItemLoading";
import EmptyCart from "../../components/cart/EmptyCart";

export class SidebarCartModal extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }
  onhandelRemoveFromCart = (item) => {
    console.log(item);
    this.props.removeFromCart(item);
  };
  render() {
    const {
      shoppingCart,
      loading,
      cartEmpty,
      token,
      onhandelCartClose,
    } = this.props;
    let subtotal = 0;
    console.log(shoppingCart);
    if (shoppingCart.length !== 0) {
      shoppingCart.forEach((element) => {
        return (subtotal +=
          (element ? element.quantity : 1) *
          (element.product ? element.product.price : 1));
      });
      subtotal = subtotal.toFixed(2);
    }
    if (!token) {
      return <Redirect to="/login/?next=/cart/" />;
    }
    return (
      <div
        className="modal fade modal-right show"
        role="dialog"
        id="sidebarCart"
        tabIndex="-1"
        style={{ display: "block", paddingRight: "17px" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content sidebar-cart-content">
            <div className="modal-header border-0">
              <button
                className="close btn modal-close"
                onClick={() => onhandelCartClose()}
              >
                <BsX size="19" />
              </button>
            </div>
            <div className="modal-body px-5 sidebar-cart-body">
              <div className="sidebar-cart-product-wrapper custom-scrollbar">
                {cartEmpty && <EmptyCart />}
                {loading && (
                  <CartModalItemLoading prefix={"navbar-cart-product"} />
                )}
                {shoppingCart.map((item, index) => (
                  <CartModalItem
                    key={index + item._id}
                    item={item}
                    onhandelRemoveFromCart={this.onhandelRemoveFromCart}
                  />
                ))}
              </div>
            </div>
            <div className="modal-footer sidebar-cart-footer">
              <div className="w-100">
                <h5 className="mb-4">
                  Subtotal:
                  <span className="float-right">${subtotal}</span>
                </h5>
                <Link
                  to="/cart/"
                  className="btn btn-outline-dark btn-block mb-3"
                >
                  View cart
                </Link>
                <Link to="/checkout/" className="btn btn-dark btn-block">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps, { fetchCart, removeFromCart })(
  SidebarCartModal
);
