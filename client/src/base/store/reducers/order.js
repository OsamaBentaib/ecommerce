import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  shoppingOrders: [],
  orderDetails: {},
  orderDetailsloading: false,
  notFound: false,
  error: null,
  loading: false,
  success: false,
};

// GET USER ORDERS
const userOrdersStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const userOrdersSuccess = (state, action) => {
  return updateObject(state, {
    shoppingOrders: action.payload,
    error: null,
    loading: false,
  });
};

const userOrdersFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

// ORDER DETAILS
const orderDetailsStart = (state, action) => {
  return updateObject(state, {
    orderDetailsloading: true,
  });
};

const orderDetailsSuccess = (state, action) => {
  return updateObject(state, {
    orderDetails: action.payload,
    orderDetailsloading: false,
  });
};

const orderDetailsFail = (state, action) => {
  return updateObject(state, {
    notFound: true,
    orderDetailsloading: false,
  });
};

// CREATE ORDER
const createOrderStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const createOrderSuccess = (state, action) => {
  return updateObject(state, {
    order: action.payload,
    error: null,
    loading: false,
    success: true,
  });
};

const createOrderFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET USER ORDERS
    case actionTypes.GET_USER_ORDERS_START:
      return userOrdersStart(state, action);
    case actionTypes.GET_USER_ORDERS_SUCCESS:
      return userOrdersSuccess(state, action);
    case actionTypes.GET_USER_ORDERS_FAIL:
      return userOrdersFail(state, action);
    // GET ORDER DETAILS
    case actionTypes.GET_ORDER_DETAILS_START:
      return orderDetailsStart(state, action);
    case actionTypes.GET_ORDER_DETAILS_SUCCESS:
      return orderDetailsSuccess(state, action);
    case actionTypes.GET_ORDER_DETAILS_FAIL:
      return orderDetailsFail(state, action);
    // CREATE ORDER
    case actionTypes.CREATE_NEW_ORDER_START:
      return createOrderStart(state, action);
    case actionTypes.CREATE_NEW_ORDER_SUCCESS:
      return createOrderSuccess(state, action);
    case actionTypes.CREATE_NEW_ORDER_FAIL:
      return createOrderFail(state, action);
    default:
      return state;
  }
};

export default orderReducer;
