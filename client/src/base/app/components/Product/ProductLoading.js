import React, { Component } from "react";

export class ProductLoading extends Component {
  render() {
    return (
      <>
        <div class="item col-xl-3 col-lg-4 col-6">
          <div
            class="product aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div class="product-image mb-md-3">
              <div className="___loding">
                <img
                  style={{ opacity: "0.0000000000000001", width: "100%" }}
                  src={require("./../../../../assets/images/book.jpg")}
                  alt="..."
                />
              </div>
            </div>
            <div class="position-relative">
              <div className="___loding ___title_loading"></div>
              <div class="___loding ___title_child_loading therd mt-1"></div>
            </div>
          </div>
        </div>
        <div class="item col-xl-3 col-lg-4 col-6">
          <div
            class="product aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div class="product-image mb-md-3">
              <div className="___loding">
                <img
                  style={{ opacity: "0.0000000000000001", width: "100%" }}
                  src={require("./../../../../assets/images/book.jpg")}
                  alt="..."
                />
              </div>
            </div>
            <div class="position-relative">
              <div className="___loding ___title_loading"></div>
              <div class="___loding ___title_child_loading therd mt-1"></div>
            </div>
          </div>
        </div>
        <div class="item col-xl-3 col-lg-4 col-6">
          <div
            class="product aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div class="product-image mb-md-3">
              <div className="___loding">
                <img
                  style={{ opacity: "0.0000000000000001", width: "100%" }}
                  src={require("./../../../../assets/images/book.jpg")}
                  alt="..."
                />
              </div>
            </div>
            <div class="position-relative">
              <div className="___loding ___title_loading"></div>
              <div class="___loding ___title_child_loading therd mt-1"></div>
            </div>
          </div>
        </div>
        <div class="item col-xl-3 col-lg-4 col-6">
          <div
            class="product aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div class="product-image mb-md-3">
              <div className="___loding">
                <img
                  style={{ opacity: "0.0000000000000001", width: "100%" }}
                  src={require("./../../../../assets/images/book.jpg")}
                  alt="..."
                />
              </div>
            </div>
            <div class="position-relative">
              <div className="___loding ___title_loading"></div>
              <div class="___loding ___title_child_loading therd mt-1"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductLoading;
