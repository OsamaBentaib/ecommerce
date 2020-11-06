import React, { Component } from "react";
import * as I from "./../../../store/constants";
export class ProductImage extends Component {
  render() {
    const { image1, image2 } = this.props;
    return (
      <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1 photoswipe-gallery">
        <div className="d-block mb-4">
          <div data-toggle="zoom">
            <img
              className="img-fluid"
              src={`${I.PROXY_URL}/media/${image1}`}
              alt="Push-up Jeans 1"
            />
          </div>
        </div>
        <div className="d-block mb-4">
          <div data-toggle="zoom">
            <img
              className="img-fluid"
              src={`${I.PROXY_URL}/media/${image2}`}
              alt="Push-up Jeans 1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImage;
