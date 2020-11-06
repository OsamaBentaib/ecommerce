import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

const getUsersStart = (state, _) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const getUsersSuccess = (state, action) => {
  const users = state.users;
  users.concat(action.payload);
  return updateObject(state, {
    users: users,
    error: null,
    loading: false,
  });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_START:
      return getUsersStart(state, action);
    case actionTypes.GET_USERS_SUCCESS:
      return getUsersSuccess(state, action);
    default:
      return state;
  }
};
export default userReducer;
