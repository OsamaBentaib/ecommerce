import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as constants from "./../constants";
import * as utils from "../utils";

const getOrdersStart = () => {
  return {
    type: actionTypes.GET_ORDERS_START,
  };
};

const getOrdersSuccess = (data) => {
  return {
    type: actionTypes.GET_ORDERS_SUCCESS,
    payload: data,
  };
};

export const fetchOrders = (s, e) => {
  const URL = constants.PROXY_URL + constants.END_POINT + `orders/${s}/${e}/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    dispatch(getOrdersStart());
    axios
      .get(URL, OPTIONS)
      .then((res) => {
        console.log(res);
        dispatch(getOrdersSuccess(res.data.orders));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updateOrder = (status, id) => {
  const URL = constants.PROXY_URL + constants.END_POINT + `order/${id}/`;
  const OPTIONS = utils.OPTIONS;
  return () => {
    axios
      .patch(URL, { status: status }, OPTIONS)
      .then((res) => {
        /**
         *  Success
         *  Notice!
         *  we don't have to do anything if it's success!
         *  because it's set as new status automaticlly!
         *
         */
      })
      .catch((err) => {
        /****
         *  -------
         *  ERROR
         *
         */
      });
  };
};
