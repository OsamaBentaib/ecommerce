import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  shoppingCart: [],
  cartEmpty: false,
  addToCartError: null,
  addToCartLoading: false,
  addToCartSuccess: false,
  addedItem: null,
  cartError: null,
  cartLoading: false,
};
// GET CART ITEMS
const cartStart = (state, action) => {
  return updateObject(state, {
    cartError: null,
    cartLoading: true,
  });
};

const cartSuccess = (state, action) => {
  let cartEmpty = false;
  if (action.payload.length === 0) {
    cartEmpty = true;
  }
  return updateObject(state, {
    shoppingCart: action.payload,
    cartError: null,
    cartEmpty: cartEmpty,
    cartLoading: false,
  });
};

const cartFail = (state, action) => {
  return updateObject(state, {
    cartError: action.error,
    cartLoading: false,
  });
};

// ADD ITEM TO CART
const addToCartStart = (state, action) => {
  return updateObject(state, {
    addToCartError: null,
    addToCartLoading: true,
  });
};

const addToCartSuccess = (state, action) => {
  return updateObject(state, {
    addToCartError: null,
    addToCartLoading: false,
    addToCartSuccess: true,
  });
};

const addToCartFail = (state, action) => {
  return updateObject(state, {
    addToCartError: action.error,
    addToCartLoading: false,
  });
};
// remove From cart
const removeFromCart = (state, action) => {
  const newCartlist = state.shoppingCart.filter(function (ele) {
    return ele !== action.payload;
  });
  return updateObject(state, {
    shoppingCart: newCartlist,
  });
};

const updateCart = (state, action) => {
  const newCartlist = state.shoppingCart.filter(function (ele) {
    if (ele._id === action.payload._id) {
      return action.payload;
    } else {
      return ele;
    }
  });
  return updateObject(state, {
    shoppingCart: newCartlist,
  });
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CART_START:
      return cartStart(state, action);
    case actionTypes.GET_CART_SUCCESS:
      return cartSuccess(state, action);
    case actionTypes.GET_CART_FAIL:
      return cartFail(state, action);
    // Add to cart
    case actionTypes.ADD_TO_CART_START:
      return addToCartStart(state, action);
    case actionTypes.ADD_TO_CART_SUCCESS:
      return addToCartSuccess(state, action);
    case actionTypes.ADD_TO_CART_FAIL:
      return addToCartFail(state, action);
    // remove from cart
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    // update cart
    case actionTypes.UPDATE_CART:
      return updateCart(state, action);
    default:
      return state;
  }
};

export default cartReducer;
