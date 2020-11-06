import React, { Component } from "react";
import { FiSearch, FiLoader } from "react-icons/fi";
import { fetchProducts } from "../../../store/actions/products";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
export class ProductsList extends Component {
  componentDidMount() {
    this.props.fetchProducts(0, 2);
  }
  loadMore = (start, limit) => {
    this.props.fetchProducts(start, limit);
  };
  render() {
    const { products, loading } = this.props;
    console.log(products);

    return (
      <div className="card">
        <div className="card-header">
          <form>
            <div className="input-group input-group-flush">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {loading ? <FiLoader size="19" /> : <FiSearch size="19" />}
                </span>
              </div>
              <input
                className="form-control list-search"
                type="search"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="table-responsive mb-0">
          <table className="table table-sm table-nowrap table-hover card-table">
            <thead>
              <tr>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="products-product"
                  >
                    Product
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="products-sales"
                  >
                    Name
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="products-stock"
                  >
                    Date
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="products-stock"
                  >
                    Status
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="products-price"
                  >
                    Price
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="products-price"
                  >
                    Edit
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="list">
              {products &&
                products.map((product, i) => (
                  <ProductItem product={product.product} key={i} />
                ))}
              {products.length > 0 && (
                <div class="card-footer">
                  <div className="mb-2">
                    <button
                      onClick={() => this.loadMore(products.length, 2)}
                      class="btn btn-sm btn-white"
                    >
                      <span className="ml-2 mr-2">
                        {loading && <FiLoader color="black" size="19" />}
                      </span>
                      <span className="ml-2 mr-2">Load More</span>
                    </button>
                  </div>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  return {
    products: state.product.products,
    loading: state.product.loading,
  };
};
export default connect(mapSateToProps, { fetchProducts })(ProductsList);
