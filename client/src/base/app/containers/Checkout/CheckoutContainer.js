import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Hero from "./Hero";
import CartView from "../../components/Checkout/CartView";
import Shipping from "../../components/Checkout/Shipping";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import { fetchCart } from "./../../../store/actions/cart";
import { PlaceOrder } from "./../../../store/actions/order";
import { connect } from "react-redux";
import Conditions from "../../components/conditions/Conditions";

export class CheckoutContainer extends Component {
  state = {
    paypalPay: false,
    creditCardPay: false,
    deliveryPay: true,
    shippingFree: true,
    shipping: 0,
    newShippingAddress: false,
    selectedAddress: {},
    err: null,
  };
  onhandelAddNewShippingAddres = (e) => {
    this.setState({ newShippingAddress: !e });
  };
  onhandelChangeSelectPaymentMethod = (name, value) => {
    if (name === "paypalPay") {
      this.setState({
        paypalPay: !value,
        creditCardPay: value,
        deliveryPay: value,
      });
    } else if (name === "creditCardPay") {
      this.setState({
        paypalPay: value,
        creditCardPay: !value,
        deliveryPay: value,
      });
    } else {
      this.setState({
        paypalPay: value,
        creditCardPay: value,
        deliveryPay: !value,
      });
    }
  };
  onhandelSelectShipping = (e) => {
    if (!e) {
      this.setState({ shipping: 20, shippingFree: e });
    } else {
      this.setState({ shipping: 0, shippingFree: e });
    }
  };
  onhandelSelectAddress = (e) => {
    this.setState({ selectedAddress: e });
  };
  onhandelPlacedOrder = (shoppingCart, total) => {
    const {
      paypalPay,
      creditCardPay,
      deliveryPay,
      shippingFree,
      selectedAddress,
    } = this.state;
    let orderItems = [];
    const paymentMethod = paypalPay
      ? "Paypal"
      : creditCardPay
      ? "Credit Card"
      : deliveryPay
      ? "Delivery"
      : null;
    const shippingType = shippingFree ? "Free" : "Express";
    const address = selectedAddress._id;
    shoppingCart.forEach((e) => {
      const item = {
        product: e.product._id,
        color: e.color,
        size: e.size,
        quantity: e.quantity,
        subtotal: e.quantity * e.product.price,
      };
      orderItems.push(item);
    });
    const order = {
      itemes: orderItems,
      paymentMethod: paymentMethod,
      shippingType: shippingType,
      total: total,
      address: address,
    };
    if (address) {
      this.props.PlaceOrder(order);
    } else {
      this.setState({ err: "Please Select Shipping Address!" });
    }
  };
  componentDidMount() {
    this.props.fetchCart();
  }
  render() {
    const {
      paypalPay,
      creditCardPay,
      deliveryPay,
      shippingFree,
      shipping,
      selectedAddress,
      err,
    } = this.state;
    const {
      CartLoading,
      CartEmpty,
      token,
      shoppingCart,
      orderLoading,
      orderSuccess,
    } = this.props;
    let value = 0;
    let subtotal = 0;
    let total = 0;
    let x = shipping;
    if (!CartEmpty && !CartLoading) {
      shoppingCart.forEach((e) => {
        return (value += e.quantity * e.product.price);
      });
      subtotal = value.toFixed(2);
      x += value;
      total = x.toFixed(2);
    }
    if (!token) {
      return <Redirect to="/login/?next=/checkout/" />;
    }
    if (orderSuccess) {
      return <Redirect to="/order_success/" />;
    }
    return (
      <Fragment>
        <Hero />
        <div className="container pb-6">
          <div className="row">
            <div className="col-lg-7 pr-xl-6">
              <CheckoutForm
                onhandelSelectAddress={this.onhandelSelectAddress}
                selectedAddress={selectedAddress}
              />
            </div>
            <div className="col-lg-5">
              <h5 className="mb-5">Order Summary</h5>
              <table className="table border-bottom border-dark mb-5">
                <tbody>
                  <CartView
                    shoppingCart={shoppingCart}
                    CartLoading={CartLoading}
                    CartEmpty={CartEmpty}
                    subtotal={subtotal}
                  />
                  <tr>
                    <th className="py-5 border-dark">
                      <div className="mb-4">Shipping and handling</div>
                      <Shipping
                        onhandelSelectShipping={this.onhandelSelectShipping}
                        shippingFree={shippingFree}
                      />
                    </th>
                  </tr>
                  <tr>
                    <th className="py-4 text-uppercase font-weight-normal border-dark align-bottom">
                      Total
                    </th>
                    <td className="py-4 text-right h3 font-weight-normal border-dark">
                      ${total}
                    </td>
                  </tr>
                  <PaymentMethod
                    onhandelChangeSelectPaymentMethod={
                      this.onhandelChangeSelectPaymentMethod
                    }
                    paypalPay={paypalPay}
                    creditCardPay={creditCardPay}
                    deliveryPay={deliveryPay}
                  />
                </tbody>
              </table>
              <Conditions />
              {err && <div className="alert alert-danger">{err}</div>}
              <button
                onClick={() => this.onhandelPlacedOrder(shoppingCart, total)}
                disabled={orderLoading}
                className={`btn btn-dark btn-block btn-lg mb-5 ${
                  orderLoading && "disabled"
                }`}
              >
                {orderLoading ? "Placing order..." : "Place order"}
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    shoppingCart: state.cart.shoppingCart,
    CartLoading: state.cart.cartLoading,
    CartEmpty: state.cart.cartEmpty,
    CartError: state.cart.cartError,
    // ORDER
    order: state.order.order,
    orderLoading: state.order.loading,
    orderError: state.order.error,
    orderSuccess: state.order.success,
    // TOKEN
    token: state.auth.token,
  };
};
export default connect(mapStateToProps, { fetchCart, PlaceOrder })(
  CheckoutContainer
);
