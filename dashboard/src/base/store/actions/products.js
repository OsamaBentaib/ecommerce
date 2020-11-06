import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as constants from "./../constants";
import * as utils from "../utils";

// GET
export const getProductsStart = () => {
  return {
    type: actionTypes.GET_PRODUCTS_START,
  };
};

export const getProductsSuccess = (data) => {
  console.log(data);
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

// POST
export const postProductsStart = () => {
  return {
    type: actionTypes.POST_PRODUCTS_START,
  };
};

export const postProductsSuccess = (data) => {
  return {
    type: actionTypes.POST_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const postProductsFail = (error) => {
  return {
    type: actionTypes.POST_PRODUCTS_FAIL,
    error: error,
  };
};

export const fetchProducts = (start, limit) => {
  const URL =
    constants.PROXY_URL + constants.END_POINT + `/products/${start}/${limit}/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(getProductsStart());
    axios.get(URL, OPTIONS).then((res) => {
      console.log(res);
      dispatch(getProductsSuccess(res.data.products));
    });
  };
};

export const updateProduct = (status, id) => {
  const URL = constants.PROXY_URL + constants.END_POINT + `/product/${id}/`;
  const OPTIONS = utils.OPTIONS;
  return () => {
    axios.patch(URL, { status: status }, OPTIONS).then((res) => {
      /***
       *
       *  Success!
       *
       */
    });
  };
};
export const deleteProduct = (id) => {
  const URL = constants.PROXY_URL + constants.END_POINT + `/product/${id}/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(getProductsStart());
    axios.delete(URL, OPTIONS).then((res) => {
      /***
       *
       *  Success!
       *
       */
    });
  };
};

export const postProduct = (body) => {
  const URL = constants.PROXY_URL + constants.END_POINT + "product/new/";
  const token = localStorage.getItem("token");
  const OPTIONS = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  };
  return (dispatch) => {
    dispatch(postProductsStart());
    axios
      .post(URL, body, OPTIONS)
      .then((res) => {
        console.log(res);
        dispatch(postProductsSuccess(res.data.products));
        window.location.href = "/products/";
      })
      .catch((err) => {
        console.log(err);
        dispatch(postProductsFail(err.error));
      });
  };
};
