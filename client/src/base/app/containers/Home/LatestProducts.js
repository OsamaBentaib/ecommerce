import React, { Component } from "react";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import { fetchProducts } from "./../../../store/actions/product";
import { connect } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
/***
 *  ==========================================
 *  This page fetching the newest products
 *   it's not allow to fetch more products
 *   for that functionality go to shop screen!
 *  ===========================================
 */
export class LatestProducts extends Component {
  componentDidMount() {
    /***
     *  =====================
     *   here we call the apis
     *   but
     *   we dont'n need to pass
     *   any parameters!
     *  ======================
     */
    this.props.fetchProducts();
  }
  render() {
    const { Products } = this.props;
    return (
      <div class="position-relative py-6">
        <div class="container">
          <h2
            class="display-2 font-weight-bold mb-5"
            style={{ color: "#efb2af" }}
          >
            New Arrivals
          </h2>
          <div class="row justify-content-between align-items-center mb-4">
            <div class="col-12 col-md">
              <ul class="list-inline mb-3 mb-md-0">
                <li class="list-inline-item">
                  <h4>Latest Products</h4>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-auto">
              <Link to="/shop/" class="btn btn-link px-0">
                All products
                <span>
                  <BsArrowRight size="16" />
                </span>
              </Link>
            </div>
          </div>
          <div class="mx-n3" style={{ position: "relative", height: "1307px" }}>
            <div class="row">
              {Products.map((product, index) => (
                <Product
                  image="clock3.jpg"
                  key={index + product._id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Products: state.product.Products,
    loading: state.product.loading,
    error: state.product.error,
  };
};
export default connect(mapStateToProps, { fetchProducts })(LatestProducts);
