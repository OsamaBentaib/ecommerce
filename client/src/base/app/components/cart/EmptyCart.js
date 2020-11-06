import React, { Component } from "react";

export class EmptyCart extends Component {
  render() {
    return (
      <div className={`text-center ${this.props.prefix}`}>
        <div className="align-items-center">
          <img
            style={{ width: "100%" }}
            src={require("./../../../../assets/images/empty-cart.png")}
            alt="..."
          />
          <h4>
            Your cart is empty{" "}
            <span role="img" aria-label="😔">
              😔
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
