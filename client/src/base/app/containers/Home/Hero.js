import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Hero extends Component {
  render() {
    return (
      <div className="w-100 mt-5">
        <div className="w-100">
          <div className="w-100">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-sm-6 pt-5 pt-md-0">
                  <p className="subtitle letter-spacing-3 mb-3 text-dark font-weight-light">
                    E-commerce Website
                  </p>
                  <h2 className="display-3" style={{ lineHeight: 1 }}>
                    Shopping without limits
                  </h2>
                  <p className="text-muted mb-5">
                    With our shop you can shop, in more than 1000 products,
                    without any limits check that out, and get started :)
                  </p>
                  <Link to="/shop/" className="btn btn-outline-primary">
                    Start Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
