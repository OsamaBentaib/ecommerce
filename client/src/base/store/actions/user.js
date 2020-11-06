import * as actionTypes from "./actionTypes";
import * as utils from "../utils";
import * as constants from "../constants";
import axios from "axios";

// Delete User Dispatches 
export const DeleteUser = () => {
    return {
        type: actionTypes.DELETE_USER_START,
    }
}

export const DeleteUserSuccess = () => {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
    }
}

// Delete User Action 
export const deleteUserAccount = (userId) => {
    const URL = constants.PROXY_URL + constants.AUTH + `${userId}`;
    const options = utils.OPTIONS;
    return dispatch => {
        dispatch(DeleteUser());
        axios
            .delete(URL, options)
            .then(res => {
                dispatch(DeleteUserSuccess())
            })
            .catch(err => {
                /****
                 * 
                 * 
                 * 
                 */
            });
    };
};

