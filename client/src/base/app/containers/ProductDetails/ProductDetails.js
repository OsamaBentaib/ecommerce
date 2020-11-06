import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductDetails } from "./../../../store/actions/product";
import { addToCart } from "./../../../store/actions/cart";
import { addToWishList } from "./../../../store/actions/wishlists";
import ProductDetalisItem from "./ProductDetalisItem";
import AddToCartSuccess from "../../components/success/AddToCartSuccess";
import ProductDetailesLoading from "../../components/Loading/ProductDetailesLoading";
export class ProductDetails extends Component {
  state = {
    OnhandelAddToCartError: null,
    OnhandelAddToWishlistError: null,
    redirect: null,
  };
  componentDidMount() {
    const productId = this.props.match.params.id;
    console.log(productId);
    this.props.fetchProductDetails(productId);
  }
  onhandelAddToCart = (e) => {
    const { selectedSize, selectedColor } = e;
    if (selectedSize !== null && selectedColor !== null) {
      if (!this.props.token) {
        this.setState({ redirect: `/login/?next=/product/${e.productId}/` });
      } else {
        this.props.addToCart(e);
      }
    } else {
      this.setState({
        OnhandelAddToCartError: "The Size and Color, quantity is required!",
      });
    }
  };
  onhandelAddToWishlist = (e) => {
    const { selectedSize, selectedColor } = e;
    if (selectedSize !== null && selectedColor !== null) {
      if (!this.props.token) {
        this.setState({ redirect: `/login/?next=/product/${e.productId}/` });
      } else {
        this.props.addToWishList(e);
      }
    } else {
      this.setState({
        OnhandelAddToWishlistError: "The Size and Color, quantity is required!",
      });
    }
  };
  render() {
    const {
      OnhandelAddToCartError,
      OnhandelAddToWishlistError,
      redirect,
    } = this.state;
    const {
      product,
      addToCartLoading,
      loading,
      addToCartSuccess,
      addedItem,
    } = this.props;
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    return (
      <section>
        <div className="container-fluid px-xl-7 pt-5 pb-3 pb-lg-6">
          <div className="d-block" id="addToCartAlert">
            {!addToCartLoading && addToCartSuccess && (
              <AddToCartSuccess addedItem={addedItem} />
            )}
          </div>
          {loading && <ProductDetailesLoading />}

          {!loading && product._id !== undefined && (
            <ProductDetalisItem
              product={product}
              onhandelSizeChange={this.onhandelSizeChange}
              onhandelColorChange={this.onhandelColorChange}
              addToCartLoading={addToCartLoading}
              OnhandelAddToCartError={OnhandelAddToCartError}
              OnhandelAddToWishlistError={OnhandelAddToWishlistError}
              onhandelAddToCart={this.onhandelAddToCart}
              onhandelAddToWishlist={this.onhandelAddToWishlist}
            />
          )}
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product.productDetails,
    loading: state.product.loading,
    error: state.product.error,
    addToCartLoading: state.cart.addToCartLoading,
    addToCartSuccess: state.cart.addToCartSuccess,
    addedItem: state.cart.addedItem,
    token: state.auth.token,
  };
};
export default connect(mapStateToProps, {
  fetchProductDetails,
  addToCart,
  addToWishList,
})(ProductDetails);
