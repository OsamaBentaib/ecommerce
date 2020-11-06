import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
  loading: false,
  success: false,
};

const passwordChangeStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const passwordChangeSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    success: true,
  });
};

const passwordChangeFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PASSWORD_CHANGE_START:
      return passwordChangeStart(state, action);
    case actionTypes.PASSWORD_CHANGE_SUCCESS:
      return passwordChangeSuccess(state, action);
    case actionTypes.PASSWORD_CHANGE_FAIL:
      return passwordChangeFail(state, action);
    default:
      return state;
  }
};

export default passwordReducer;
