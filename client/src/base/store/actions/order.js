import * as actionTypes from "./actionTypes";
import * as utils from "../utils";
import * as constants from "../constants";
import axios from "axios";

// create New Order Dispatches

export const createNewOrderStart = () => {
  return {
    type: actionTypes.CREATE_NEW_ORDER_START,
  };
};

export const createNewOrderSuccess = (data) => {
  return {
    type: actionTypes.CREATE_NEW_ORDER_SUCCESS,
    payload: data,
  };
};

export const createNewOrderFail = (error) => {
  return {
    type: actionTypes.CREATE_NEW_ORDER_FAIL,
    error: error,
  };
};

// GET ORDER DETAILS
export const OrdersDetailsStart = () => {
  return {
    type: actionTypes.GET_ORDER_DETAILS_START,
  };
};
export const OrdersDetailsSuccess = (data) => {
  return {
    type: actionTypes.GET_ORDER_DETAILS_SUCCESS,
    payload: data,
  };
};
export const OrdersDetailsFail = () => {
  return {
    type: actionTypes.GET_ORDER_DETAILS_FAIL,
  };
};
// Fetch User Orders Dispatches

export const userOrdersStart = () => {
  return {
    type: actionTypes.GET_USER_ORDERS_START,
  };
};

export const userOrdersSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_ORDERS_SUCCESS,
    payload: data,
  };
};

export const userOrdersFail = (error) => {
  return {
    type: actionTypes.GET_USER_ORDERS_FAIL,
    error: error,
  };
};

// Create order Action
export const PlaceOrder = (order) => {
  const URL = constants.PROXY_URL + constants.ORDERS;
  const body = order;
  const options = utils.OPTIONS;
  return (dispatch) => {
    dispatch(createNewOrderStart());
    axios
      .post(URL, body, options)
      .then((res) => {
        console.log(res);
        dispatch(createNewOrderSuccess(res.data.order));
      })
      .catch((err) => {
        console.log(err);
        dispatch(createNewOrderFail(err));
      });
  };
};

// Fetch User orders Action
export const fetchUserOrders = () => {
  const URL = constants.PROXY_URL + constants.ORDERS + "user/";
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(userOrdersStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        console.log(res.data.orders);
        dispatch(userOrdersSuccess(res.data.orders));
      })
      .catch((err) => {
        console.log(err);
        dispatch(userOrdersFail(err));
      });
  };
};

// Fetch User orders Action
export const fetchOrderDetails = (ID) => {
  const URL = constants.PROXY_URL + constants.ORDERS + `${ID}/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(OrdersDetailsStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        console.log(res);
        dispatch(OrdersDetailsSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(OrdersDetailsFail(err));
      });
  };
};
