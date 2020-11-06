import React, { Component } from "react";
import Hero from "./Hero";
import WishlistProduct from "../../components/Product/WishlistProduct";
import { connect } from "react-redux";
import {
  fetchWishList,
  deleteFromWishList,
} from "./../../../store/actions/wishlists";
import { addToCart } from "./../../../store/actions/cart";
import { Redirect } from "react-router-dom";
import WishlistProductLoading from "../../components/Loading/WishlistLoading";
import AddToCartSuccess from "../../components/success/AddToCartSuccess";

export class WishlistContainer extends Component {
  componentDidMount() {
    this.props.fetchWishList();
  }
  onhandelRemoveFromWishlist = (productId, item) => {
    this.props.deleteFromWishList(productId, item);
  };
  onhandelAddToCart = (e, addedItem) => {
    this.props.addToCart(e, addedItem);
  };
  render() {
    const {
      shoppingWishlist,
      token,
      loading,
      addedItem,
      addToCartLoading,
      addToCartSuccess,
    } = this.props;
    console.log(shoppingWishlist);
    if (!token) {
      return <Redirect to="/login/?next=/wishlist/" />;
    }
    return (
      <div>
        <Hero loading={loading} length={shoppingWishlist.length} />
        <div className="container pb-6">
          <div className="cart">
            <div className="cart-body">
              {!addToCartLoading && addToCartSuccess && (
                <AddToCartSuccess addedItem={addedItem} />
              )}
              {loading && <WishlistProductLoading />}
              {!loading &&
                shoppingWishlist.map((item, index) => (
                  <WishlistProduct
                    key={index + item._id}
                    item={item}
                    onhandelRemoveFromWishlist={this.onhandelRemoveFromWishlist}
                    onhandelAddToCart={this.onhandelAddToCart}
                    addToCartLoading={addToCartLoading}
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
    shoppingWishlist: state.wishlist.shoppingWishlist,
    loading: state.wishlist.wishlistLoading,
    wishlistEmpty: state.wishlist.wishlistEmpty,
    error: state.wishlist.wishlistError,
    token: state.auth.token,
    addToCartLoading: state.cart.addToCartLoading,
    addToCartSuccess: state.cart.addToCartSuccess,
    addedItem: state.cart.addedItem,
  };
};
export default connect(mapStateToProps, {
  fetchWishList,
  deleteFromWishList,
  addToCart,
})(WishlistContainer);
