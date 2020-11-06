import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
};
const getOrdersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
  });
};
const getOrdersSuccess = (state, action) => {
  const orders = state.orders;
  orders.concat(action.payload);
  return updateObject(state, {
    orders: orders,
    loading: false,
  });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDERS_START:
      return getOrdersStart(state, action);
    case actionTypes.GET_ORDERS_SUCCESS:
      return getOrdersSuccess(state, action);
    default:
      return state;
  }
};
export default orderReducer;
