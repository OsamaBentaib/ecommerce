import * as actionTypes from "./actionTypes";
import axios from 'axios'
import * as constants from "../constants";
import * as utils from "../utils";

// GET
export const getUsersStart = () => {
    return {
        type: actionTypes.GET_USERS_START
    };
};

export const getUsersSuccess = data => {
    return {
        type: actionTypes.GET_USERS_SUCCESS,
        payload: data
    };
};

export const fetchUsers = (s, e) => {
    const URL = constants.PROXY_URL + constants.END_POINT + `users/${s}/${e}/`;
    const OPTIONS = utils.OPTIONS;
    return dispatch => {
        dispatch(getUsersStart());
        axios
            .get(URL, OPTIONS)
            .then(res => {
                console.log(res);
                dispatch(getUsersSuccess(res.data.users));
            })
            .catch(err => {
                console.log(err)
            });
    };
};
