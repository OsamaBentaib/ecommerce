import React, { Component, Fragment } from "react";

export class Shipping extends Component {
  render() {
    const { onhandelSelectShipping, shippingFree } = this.props;
    return (
      <Fragment>
        <div className="form-group mb-1 ml-4">
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="shipping0"
              type="radio"
              name="shipping"
              onChange={() => onhandelSelectShipping(true)}
              checked={shippingFree}
            />
            <label
              className="custom-control-label text-sm font-weight-normal"
              htmlFor="shipping0"
            >
              Free
            </label>
            <div className="">
              <small className="text-sm">15-20 shipping days</small>
            </div>
          </div>
        </div>
        <div className="form-group mb-1 ml-4">
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              id="shipping1"
              type="radio"
              name="shipping"
              onChange={() => onhandelSelectShipping(false)}
              checked={!shippingFree}
            />
            <label
              className="custom-control-label text-sm font-weight-normal"
              htmlFor="shipping1"
            >
              HDL $20
            </label>
            <div className="">
              <small className="text-sm">2-4 shipping days</small>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Shipping;
