import * as actionTypes from "./actionTypes";
import * as utils from "../utils";
import * as constants from "../constants";
import axios from "axios";

// Add To wishlists Dispatches

export const addToWishlistsStart = () => {
  return {
    type: actionTypes.ADD_TO_WISHLIST_START,
  };
};

export const addToWishlistsSuccess = (data) => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    payload: data,
  };
};

export const addToWishlistsFail = (error) => {
  return {
    type: actionTypes.ADD_TO_WISHLIST_FAIL,
    error: error,
  };
};

// Remove from WishList Dispatches

export const removeFromWishlist = (data) => {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: data,
  };
};

// Fetch WishList Dispatches

export const wishListStart = () => {
  return {
    type: actionTypes.GET_WISHLIST_START,
  };
};

export const wishlistSuccess = (data) => {
  return {
    type: actionTypes.GET_WISHLIST_SUCCESS,
    payload: data,
  };
};

export const wishListFail = (error) => {
  return {
    type: actionTypes.GET_WISHLIST_FAIL,
    error: error,
  };
};

// Add To wishlist Action
export const addToWishList = (e) => {
  const URL = constants.PROXY_URL + constants.WISHLIST;
  const body = e;
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(addToWishlistsStart());
    axios
      .post(URL, body, options)
      .then((res) => {
        dispatch(addToWishlistsSuccess(res.data.createdWishlist));
      })
      .catch((err) => {
        dispatch(addToWishlistsFail(err));
      });
  };
};

// delete from Wishlist Action
export const deleteFromWishList = (data, item) => {
  const URL = constants.PROXY_URL + constants.WISHLIST;
  const options = utils.OPTIONS;
  const body = data;
  // we make this as a post request because in the server we will check if the product is already in wishlist and remove it
  return (dispatch) => {
    dispatch(removeFromWishlist(item));
    axios
      .post(URL, body, options)
      .then((res) => {})
      .catch((err) => {});
  };
};

// Fetch WishList Action
export const fetchWishList = () => {
  const URL = constants.PROXY_URL + constants.WISHLIST + "user/";
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(wishListStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        localStorage.setItem("wishlist", res.data.wishlistItems);
        dispatch(wishlistSuccess(res.data.wishlistItems));
      })
      .catch((err) => {
        dispatch(wishListFail(err));
      });
  };
};
