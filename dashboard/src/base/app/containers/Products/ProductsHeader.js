import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductsHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-body">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="header-pretitle">Overview</h6>
              <h1 className="header-title">Products</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <ul className="nav nav-tabs nav-overflow header-tabs">
                <li className="nav-item">
                  <Link to="" className="nav-link active mr-3 ml-2">
                    All{ " " }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsHeader;
