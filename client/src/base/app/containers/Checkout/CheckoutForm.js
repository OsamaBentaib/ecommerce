import React, { Component } from "react";
import Addresses from "../Customer/Addresses/Addresses";

export class CheckoutForm extends Component {
  render() {
    const { onhandelSelectAddress, selectedAddress } = this.props;
    return (
      <div>
        <h5 className="mb-5">Personel Info</h5>
        <div className="row">
          <Addresses
            onhandelSelectAddress={onhandelSelectAddress}
            selector={true}
            selectedAddress={selectedAddress}
          />
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
