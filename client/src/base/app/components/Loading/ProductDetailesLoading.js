import React, { Component } from "react";
export class ProductDetailesLoading extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1 photoswipe-gallery">
          <div className="___loding __bg_image_item ml-3"></div>
        </div>
        <div className="col-lg-6 col-xl-4 pt-4 order-1 order-lg-2 ml-lg-auto">
          <div className="sticky-top" style={{ top: "100px" }}>
            <div className="___title_child_loading ___loding mb-4 bg-h w-100"></div>
            <div className="___title_child_loading ___loding mt-1"></div>
            <div className="___title_child_loading second ___loding mt-1"></div>
            <div className="row">
              <div className="col-sm-6 col-lg-12 detail-option mb-4">
                <div className="___title_child_loading second mt-4 ___loding"></div>
                <div className="btn-group-toggle btn-group-square">
                  <div className="___title_child_loading therd mt-1 ___loding"></div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-12 detail-option mb-4">
                <div className="___title_child_loading second mt-4 ___loding"></div>
                <div
                  className="btn-group-toggle btn-group-square"
                  data-toggle="buttons"
                >
                  <ul className="list-inline mb-0 colours-wrapper">
                    <div className="___title_child_loading therd mt-4 ___loding"></div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="input-group w-100 mb-4">
              <div className="___title_loading mt-4 ___loding"></div>
            </div>
            <div className="mb-4">
              <div className="___title_child_loading mt-4 ___loding"></div>
            </div>
            <ul className="list-unstyled">
              <div className="___title_child_loading second mt-4 ___loding"></div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetailesLoading;
