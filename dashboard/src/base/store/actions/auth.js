import axios from "axios";
import * as actionTypes from "./actionTypes";
import * as constants from "./../constants";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogin = (username, email, password) => {
  const URL = constants.PROXY_URL + "/auth/login/";
  const body = {
    username: username,
    email: email,
    password: password,
  };
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(URL, body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          if (res !== undefined) {
            if (res.data.token || res.data.userId) {
              const token = res.data.token;
              localStorage.setItem("token", token);
              dispatch(authSuccess(token));
              window.location.href = "/";
            }
          }
        } else if (res.status === 204) {
          dispatch(authFail("Account with the following data doesn't exist!"));
        } else {
          dispatch(authFail("Something wont wrong! Please try again later"));
        }
      })
      .catch((err) => {
        dispatch(authFail("Something wont wrong! Please try again later"));
      });
  };
};
