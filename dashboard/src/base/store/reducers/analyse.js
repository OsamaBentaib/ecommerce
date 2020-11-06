import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  Activities: [],
  Counters: null,
  Orders: null
};

const analyseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ACTIVITIES_ANALYSE:
      return updateObject(state, {
        Activities: action.payload,
      });
    case actionTypes.GET_COUNTERS_ANALYSE:
      return updateObject(state, {
        Counters: action.payload,
      });
    case actionTypes.GET_ORDERS_ANALYSE:
      return updateObject(state, {
        Orders: action.payload,
      });
    default:
      return state;
  }
};

export default analyseReducer;
