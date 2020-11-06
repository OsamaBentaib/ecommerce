import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  Products: [],
  error: null,
  loading: false,
  productDetails: {},
};

const setQueryFilters = (state, action) => {
  console.log(state.Products);
  const sorted = state.Products.sort();
  console.log(sorted);
  if ((action.order = "oldest")) {
    return updateObject(state, {
      Products: sorted,
    });
  }
  return updateObject(state, {
    Products: state.Products,
  });
};

// Get  Products
const ProductsStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const ProductsSuccess = (state, action) => {
  return updateObject(state, {
    Products: action.payload,
    error: null,
    loading: false,
  });
};

const ProductsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};
const loadMore = (state, action) => {
  console.log(state.Products);
  action.payload.forEach((element) => {
    state.Products.push(element);
  });
  console.log(state.Products);
  return updateObject(state, {
    Products: state.Products,
    error: null,
    loading: false,
  });
};

// Get  Product Details
const ProductDetailsStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const ProductDetailsSuccess = (state, action) => {
  return updateObject(state, {
    productDetails: action.payload,
    error: null,
    loading: false,
  });
};

const ProductDetailsFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// Post New Products
const PostNewProductStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const PostNewProductSuccess = (state, action) => {
  return updateObject(state, {
    Products: action.payload,
    error: null,
    loading: false,
  });
};

const PostNewProductFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// delete product
const deleteProduct = (state, action) => {
  console.log("Action needed For remove Item");
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_START:
      return ProductsStart(state, action);
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return ProductsSuccess(state, action);
    case actionTypes.GET_PRODUCTS_FAIL:
      return ProductsFail(state, action);
    case actionTypes.LOAD_MORE_PRODUCTS:
      return loadMore(state, action);
    // Product Details
    case actionTypes.GET_PRODUCT_DETAILS_START:
      return ProductDetailsStart(state, action);
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return ProductDetailsSuccess(state, action);
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return ProductDetailsFail(state, action);
    // Post New Product
    case actionTypes.POST_NEW_PRODUCT_START:
      return PostNewProductStart(state, action);
    case actionTypes.POST_NEW_PRODUCT_SUCCESS:
      return PostNewProductSuccess(state, action);
    case actionTypes.POST_NEW_PRODUCT_FAIL:
      return PostNewProductFail(state, action);
    // Delete Product
    case actionTypes.DELETE_PRODUCT:
      return deleteProduct(state, action);
    //Filter
    case actionTypes.SET_QUERY_FILTER:
      return setQueryFilters(state, action);
    default:
      return state;
  }
};

export default productReducer;
