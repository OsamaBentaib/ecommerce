import * as actionTypes from "./actionTypes";
import * as utils from "./../utils";
import * as constants from "./../constants";
import axios from "axios";

export const addToCartStart = () => {
  return {
    type: actionTypes.ADD_TO_CART_START,
  };
};

export const addToCartSuccess = () => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
  };
};

export const addToCartFail = (error) => {
  return {
    type: actionTypes.ADD_TO_CART_FAIL,
    error: error,
  };
};
export const updateCartStart = (data) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: data,
  };
};
// Remove from Cart Dispatches

export const removeFromCartStart = (data) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: data,
  };
};

// Fetch Cart Dispatches

export const cartStart = () => {
  return {
    type: actionTypes.GET_CART_START,
  };
};

export const cartSuccess = (data) => {
  return {
    type: actionTypes.GET_CART_SUCCESS,
    payload: data,
  };
};

export const cartFail = (error) => {
  return {
    type: actionTypes.GET_CART_FAIL,
    error: error,
  };
};

// Update Cart Action
export const updateCart = (item, plus) => {
  const e = {
    ...item,
    quantity: item.quantity + plus,
  };
  const URL = constants.PROXY_URL + constants.CART + `${e._id}/`;
  const body = { quantity: e.quantity };
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(updateCartStart(e));
    axios
      .patch(URL, body, options)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};
// Add To Cart Action
export const addToCart = (e, addedItem) => {
  console.log(addedItem);
  const URL = constants.PROXY_URL + constants.CART;
  const body = e;
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(addToCartStart());
    axios
      .post(URL, body, options)
      .then((res) => {
        dispatch(addToCartSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(addToCartFail(err));
      });
  };
};
// remove from Cart Action
export const removeFromCart = (item) => {
  const URL = constants.PROXY_URL + constants.CART + `${item._id}/`;
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(removeFromCartStart(item));
    axios
      .delete(URL, options)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

// Fetch Cart Action
export const fetchCart = () => {
  const URL = constants.PROXY_URL + constants.CART + "user/";
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(cartStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        dispatch(cartSuccess(res.data.cartItems));
      })
      .catch((err) => {
        console.log(err);
        dispatch(cartFail(err));
      });
  };
};
