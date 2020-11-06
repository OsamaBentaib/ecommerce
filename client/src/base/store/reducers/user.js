import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
  loading: false,
  deleted: false,
};
// DELETE USER PROFILE
const deleteUserAccountStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};
const deleteUserAccountSuccess = (state, action) => {
  return updateObject(state, {
    deleted: true,
    error: null,
    loading: false,
  });
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // DELETE USER ACCOUNT
    case actionTypes.DELETE_USER_START:
      return deleteUserAccountStart(state, action);
    case actionTypes.DELETE_USER_SUCCESS:
      return deleteUserAccountSuccess(state, action);
    default:
      return state;
  }
};

export default userReducer;
