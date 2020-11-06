import * as actionTypes from "./actionTypes";
import * as utils from "../utils";
import * as constants from "../constants";
import axios from "axios";

// POST New Products Dispatches

export const postNewProductStart = () => {
  return {
    type: actionTypes.POST_NEW_PRODUCT_START,
  };
};

export const postNewProductSuccess = (data) => {
  return {
    type: actionTypes.POST_NEW_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const postNewProductFail = (error) => {
  return {
    type: actionTypes.POST_NEW_PRODUCT_FAIL,
    error: error,
  };
};

// Delete Product Dispatches

export const DeleteProduct = () => {
  return {
    type: actionTypes.DELETE_PRODUCT,
  };
};

// Fetch Products Dispatches

export const getProductsStart = () => {
  return {
    type: actionTypes.GET_PRODUCTS_START,
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const getProductsFail = (error) => {
  return {
    type: actionTypes.GET_PRODUCTS_FAIL,
    error: error,
  };
};
export const loadMoreSuccess = (data) => {
  return {
    type: actionTypes.LOAD_MORE_PRODUCTS,
    payload: data,
  };
};

// Fetch Product Details Dispatches

export const getProductDetailsStart = () => {
  return {
    type: actionTypes.GET_PRODUCT_DETAILS_START,
  };
};

export const getProductDetailsSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};

export const getProductDetailsFail = (error) => {
  return {
    type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
    error: error,
  };
};

// Post New Product Action
export const postNewProduct = (data) => {
  const URL = constants.PROXY_URL + constants.PRODUCTS;
  const body = {};
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(postNewProductStart());
    axios
      .post(URL, body, options)
      .then((res) => {
        dispatch(postNewProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postNewProductFail(err));
      });
  };
};

// Delete Product Action
export const deleteProduct = (productId) => {
  const URL = constants.PROXY_URL + constants.PRODUCTS + `${productId}`;
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(DeleteProduct());
    axios
      .delete(URL, options)
      .then((res) => {
      })
      .catch((err) => {
      });
  };
};

// Fetch Products Action
export const fetchProducts = (categorie, start, limit) => {
  let params = "";
  if (categorie !== undefined) params = `&categorie=${categorie}`;
  const URL =
    constants.PROXY_URL +
    constants.PRODUCTS +
    `?start=${start}&limit=${limit}` +
    params;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(getProductsStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        dispatch(getProductsSuccess(res.data.products));
      })
      .catch((err) => {
        dispatch(getProductsFail(err));
      });
  };
};
export const loadMoreProducts = (categorie, start, limit) => {
  let params = "";
  if (categorie !== undefined) params = `&categorie=${categorie}`;
  const URL =
    constants.PROXY_URL +
    constants.PRODUCTS +
    `?start=${start}&limit=${limit}` +
    params;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(getProductsStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        dispatch(loadMoreSuccess(res.data.products));
      })
      .catch((err) => {
        dispatch(getProductsFail(err));
      });
  };
};

// Fetch Products Details Action
export const fetchProductDetails = (productId) => {
  const URL = constants.PROXY_URL + constants.PRODUCTS + `${productId}/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(getProductDetailsStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        localStorage.setItem("products", res.data.product);
        dispatch(getProductDetailsSuccess(res.data.product));
      })
      .catch((err) => {
        dispatch(getProductDetailsFail(err));
      });
  };
};
