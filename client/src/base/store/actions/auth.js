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

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, email, password) => {
  const URL = constants.PROXY_URL + constants.AUTH + "login";
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
              const userId = res.data.userId;
              const expirationDate = new Date(
                new Date().getTime() + 3600 * 1000
              );
              localStorage.setItem("token", token);
              localStorage.setItem("userId", userId);
              localStorage.setItem("expirationDate", expirationDate);
              dispatch(authSuccess(token));
              window.location.href = "/";
              dispatch(checkAuthTimeout(3600));
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

export const authSignup = (username, email, password) => {
  const URL = constants.PROXY_URL + constants.AUTH + "signup/";
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
        if (res.status === 201) {
          if (res !== undefined) {
            if (res.data.token !== undefined && res.data.token !== null) {
              const token = res.data.token;
              const expirationDate = new Date(
                new Date().getTime() + 3600 * 1000
              );
              localStorage.setItem("token", token);
              localStorage.setItem("expirationDate", expirationDate);
              dispatch(authSuccess(token));
              dispatch(checkAuthTimeout(3600));
            }
          }
        } else {
          dispatch(authFail("Something wont wrong! Please try again later"));
        }
      })
      .catch((err) => {
        dispatch(authFail("Something wont wrong! Please try again later"));
      });
  };
};

// check for the token is exist
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
