import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  products: [],
  error: null,
  loading: false,
  success: false,
};
// GET PRODUCTS
const productStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const productSuccess = (state, action) => {
  const pro = state.products;
  pro.concat(action.payload);
  return updateObject(state, {
    products: pro,
    error: null,
    loading: false,
  });
};

// POST PRODUCT
const addProductStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const addProductSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    success: true,
  });
};

const addProductFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_START:
      return productStart(state, action);
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return productSuccess(state, action);
    // post
    case actionTypes.POST_PRODUCTS_START:
      return addProductStart(state, action);
    case actionTypes.POST_PRODUCTS_SUCCESS:
      return addProductSuccess(state, action);
    case actionTypes.POST_PRODUCTS_FAIL:
      return addProductFail(state, action);
    default:
      return state;
  }
};

export default productsReducer;
