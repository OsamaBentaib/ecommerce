import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as constants from "./../constants";
import * as utils from "../utils";

const ActivitiesAnalyseData = (data) => {
  return {
    type: actionTypes.GET_ACTIVITIES_ANALYSE,
    payload: data,
  };
};

const CountersAnalyseData = (data) => {
  return {
    type: actionTypes.GET_COUNTERS_ANALYSE,
    payload: data,
  };
};
const OrdersAnalyseData = (data) => {
  return {
    type: actionTypes.GET_ORDERS_ANALYSE,
    payload: data,
  };
};

export const getActivitiesAnalyse = () => {
  const URL = constants.PROXY_URL + constants.END_POINT + `/analyse/activity/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    axios.get(URL, OPTIONS).then((res) => {
      dispatch(ActivitiesAnalyseData(res.data.response));
    });
  };
};
export const getCountersAnalyse = () => {
  const URL = constants.PROXY_URL + constants.END_POINT + `/analyse/counters/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    axios.get(URL, OPTIONS).then((res) => {
      dispatch(CountersAnalyseData(res.data.response));
    });
  };
};
export const getOrdersAnalyse = () => {
  const URL = constants.PROXY_URL + constants.END_POINT + `/analyse/orders/`;
  const OPTIONS = utils.OPTIONS;
  return (dispatch) => {
    axios.get(URL, OPTIONS).then((res) => {
      dispatch(OrdersAnalyseData(res.data.response));
    });
  };
};
