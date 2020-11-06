import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Conditions extends Component {
  render() {
    return (
      <div>
        <p className="text-muted text-sm">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our <Link to=""> privacy policy</Link>.
        </p>
        <p className="text-muted text-sm mb-5">
          I have read and agree to the website{" "}
          <Link to="">terms and conditions</Link>. *{" "}
        </p>
      </div>
    );
  }
}

export default Conditions;
