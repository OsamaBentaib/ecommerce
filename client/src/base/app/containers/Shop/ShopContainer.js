import React, { Component } from "react";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import {
  fetchProducts,
  loadMoreProducts,
} from "./../../../store/actions/product";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";
import ProductLoading from "../../components/Product/ProductLoading";

export class ShopContainer extends Component {
  state = {
    queryParams: {},
    categorie: undefined,
  };
  loadMore = (s, l) => {
    this.props.loadMoreProducts(this.state.categorie, s, l);
  };
  componentDidMount() {
    let categorie = window.location.search.split("?categorie=")[1];
    this.setState({ categorie: categorie });
    this.props.fetchProducts(categorie, 0, 4);
  }
  render() {
    const { categorie } = this.state;
    const { Products, loading } = this.props;
    return (
      <div class="container py-6">
        <div class="products-grid ">
          <h1>Shop</h1>
          <Hero title={categorie} />
          <Breadcrumbs />
        </div>
        <div class="row">
          {Products.map((product, index) => (
            <Product key={index + product._id} product={product} />
          ))}
          {loading && <ProductLoading />}
        </div>

        {!loading && Products.length > 0 && (
          <nav
            class="d-flex justify-content-center mb-5 mt-3"
            aria-label="page navigation"
          >
            <ul class="pagination">
              <li class="page-item active">
                <button
                  class="btn page-link"
                  onClick={() => this.loadMore(Products.length, 4)}
                >
                  Load More
                </button>
              </li>
            </ul>
          </nav>
        )}
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
export default connect(mapStateToProps, { fetchProducts, loadMoreProducts })(
  ShopContainer
);
