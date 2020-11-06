import React, { Component, Fragment } from "react";

export class PaymentMethod extends Component {
  render() {
    const {
      onhandelChangeSelectPaymentMethod,
      deliveryPay,
      paypalPay,
      creditCardPay,
    } = this.props;
    return (
      <Fragment>
        <tr>
          <th className="pt-5 pb-4 border-dark">
            <div className="custom-control custom-radio">
              <input
                className="custom-control-input"
                id="payment0"
                type="radio"
                name="deliveryPay"
                onChange={() =>
                  onhandelChangeSelectPaymentMethod("deliveryPay", deliveryPay)
                }
                checked={deliveryPay}
              />
              <label
                className="custom-control-label text-sm font-weight-normal"
                htmlFor="payment0"
                data-toggle="collapse"
                data-target="#paymentinfo_0"
              >
                Pay on delivery
              </label>
            </div>
            {deliveryPay && (
              <div
                className="collapse show"
                id="paymentinfo_0"
                data-parent="table.table"
              >
                <div className="pt-1">
                  <small className="text-muted text-sm">
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed in
                  </small>
                </div>
              </div>
            )}
          </th>
        </tr>
        <tr>
          <th className="py-4">
            <div className="custom-control custom-radio">
              <input
                className="custom-control-input"
                id="payment1"
                type="radio"
                name="creditCardPay"
                onChange={() =>
                  onhandelChangeSelectPaymentMethod(
                    "creditCardPay",
                    creditCardPay
                  )
                }
                checked={creditCardPay}
              />
              <label
                className="custom-control-label text-sm font-weight-normal"
                htmlFor="payment1"
              >
                Card payment
              </label>
            </div>
            {creditCardPay && (
              <div
                className="collapse show"
                id="paymentinfo_1"
                data-parent="table.table"
              >
                <div className="pt-1">
                  <small className="text-muted text-sm">
                    The bedding was hardly able to cover it and seemed ready to
                    slide off any moment. His many legs, pit
                  </small>
                </div>
              </div>
            )}
          </th>
        </tr>
        <tr>
          <th className="pt-4 pb-5">
            <div className="custom-control custom-radio">
              <input
                className="custom-control-input"
                id="payment2"
                type="radio"
                name="paypalPay"
                onChange={() =>
                  onhandelChangeSelectPaymentMethod("paypalPay", paypalPay)
                }
                checked={paypalPay}
              />
              <label
                className="custom-control-label text-sm font-weight-normal"
                htmlFor="payment2"
                data-toggle="collapse"
                data-target="#paymentinfo_2"
              >
                PayPal
              </label>
            </div>
            {paypalPay && (
              <div
                className="collapse show"
                id="paymentinfo_2"
                data-parent="table.table"
              >
                <div className="pt-1">
                  <small className="text-muted text-sm">
                    His room, a proper human room although a little too small,
                    lay peacefully between its four familiar{" "}
                  </small>
                </div>
              </div>
            )}
          </th>
        </tr>
      </Fragment>
    );
  }
}

export default PaymentMethod;
