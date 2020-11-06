import axios from "axios";
import * as actionTypes from "./actionTypes";
import * as constants from './../constants';
import * as utils from "./../utils";
export const passwordChangeStart = () => {
    return {
        type: actionTypes.PASSWORD_CHANGE_START
    };
};

export const passwordChangeSuccess = () => {
    return {
        type: actionTypes.PASSWORD_CHANGE_SUCCESS,
    };
};

export const passwordChangeFail = error => {
    return {
        type: actionTypes.PASSWORD_CHANGE_FAIL,
        error: error
    };
};
export const ChangePassword = (oldPassword, newPassword) => {
    const URL = constants.PROXY_URL + constants.AUTH + "password_change/";
    const body = {
        oldPassword: oldPassword,
        newPassword: newPassword
    };
    const options = utils.OPTIONS;
    return dispatch => {
        dispatch(passwordChangeStart());
        axios
            .post(URL, body, options)
            .then(res => {
                if (res.status === 200) {
                    dispatch(passwordChangeSuccess());
                } else if (res.status === 204) {
                    dispatch(passwordChangeFail(res.data.message));
                } else {
                    dispatch(passwordChangeFail("Something wrong!!"));
                }
            })
            .catch(err => {
                console.log(err);
                dispatch(passwordChangeFail("Something wrong!!"));
            });
    };
};