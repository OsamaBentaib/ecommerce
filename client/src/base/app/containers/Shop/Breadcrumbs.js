import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb undefined">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">Shop</li>
        </ol>
      </div>
    );
  }
}

export default Breadcrumbs;
