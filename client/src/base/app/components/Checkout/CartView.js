import React, { Component, Fragment } from "react";
import CartViewLoading from "../Loading/CartViewLoading";

export class CartView extends Component {
  render() {
    const { shoppingCart, CartLoading, subtotal } = this.props;
    return (
      <Fragment>
        {!CartLoading && (
          <>
            {shoppingCart.map((item, index) => (
              <tr key={index} className="text-sm">
                <th className="py-4 font-weight-normal text-muted">
                  {item.product.name}
                  <span className="ml-1"> x {item.quantity}</span>
                </th>
                <td className="py-4 text-right text-muted">
                  ${item.quantity * item.product.price}
                </td>
              </tr>
            ))}
            <tr>
              <th className="py-4 text-uppercase font-weight-normal text-sm align-bottom">
                Order Subtotal{" "}
              </th>
              <td className="py-4 text-right text-muted">${subtotal}</td>
            </tr>
          </>
        )}
        {CartLoading && <CartViewLoading />}
      </Fragment>
    );
  }
}

export default CartView;
