import React, { Component, Fragment } from "react";

export class OrderDetailsLoading extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero py-6">
          <div className="container">
            <div className="hero-content">
              <div className="___loading ___title_loading"></div>
              <div>
                <div className="___loading ___title_child_loading"></div>
                <div className="___loading ___title_child_loading second"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="col-lg-8 col-xl-9">
          <div className="cart">
            <div className="cart-wrapper">
              <div className="cart-header">
                <div className="row">
                  <div className="col-6">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                  <div className="col-2 text-center">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                  <div className="col-2 text-right">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                  <div className="col-2 text-right">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                </div>
              </div>
              <div className="cart-body">
                <div className="row">
                  <div className="col-6">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                  <div className="col-2 text-center">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                  <div className="col-2 text-right">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                  <div className="col-2 text-right">
                    <div className="__btn__loading ___loading"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OrderDetailsLoading;
