import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  shoppingWishlist: [],
  error: null,
  loading: false,
  success: false,
};

// GET CART ITEMS
const wishlistStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const wishlistSuccess = (state, action) => {
  return updateObject(state, {
    shoppingWishlist: action.payload,
    error: null,
    loading: false,
  });
};

const wishlistFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// ADD ITEM TO CART
const addToWishlistStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const addToWishlistSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    success: true,
  });
};

const addToWishlistFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};
// remove From Wishlist
const removeFromWishlist = (state, action) => {
  const newWishlist = state.shoppingWishlist.filter(function (ele) {
    return ele !== action.payload;
  });
  return updateObject(state, {
    shoppingWishlist: newWishlist,
  });
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WISHLIST_START:
      return wishlistStart(state, action);
    case actionTypes.GET_WISHLIST_SUCCESS:
      return wishlistSuccess(state, action);
    case actionTypes.GET_WISHLIST_FAIL:
      return wishlistFail(state, action);
    // Add to cart
    case actionTypes.ADD_TO_WISHLIST_START:
      return addToWishlistStart(state, action);
    case actionTypes.ADD_TO_WISHLIST_SUCCESS:
      return addToWishlistSuccess(state, action);
    case actionTypes.ADD_TO_WISHLIST_FAIL:
      return addToWishlistFail(state, action);
    // remove from cart
    case actionTypes.REMOVE_FROM_WISHLIST:
      return removeFromWishlist(state, action);
    default:
      return state;
  }
};

export default wishlistReducer;
