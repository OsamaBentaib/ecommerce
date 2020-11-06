import * as actionTypes from "./actionTypes";
import * as utils from "./../utils";
import * as constants from "./../constants";
import axios from "axios";

// Add New Address Dispatches

export const newAddressStart = () => {
    return {
        type: actionTypes.ADD_NEW_ADDRESS_START
    };
};

export const newAddressSuccess = data => {
    return {
        type: actionTypes.ADD_NEW_ADDRESS_SUCCESS,
        payload: data
    };
};

export const newAddressFail = error => {
    return {
        type: actionTypes.ADD_NEW_ADDRESS_FAIL,
        error: error
    };
};

// Remove address Dispatches 

export const removeAddressStart = (address) => {
    return {
        type: actionTypes.REMOVE_ADDRESS,
        payload: address
    }
}

// Fetch addresses Dispatches

export const addressStart = () => {
    return {
        type: actionTypes.GET_ADDRESS_START
    };
};

export const addressSuccess = data => {
    return {
        type: actionTypes.GET_ADDRESS_SUCCESS,
        payload: data
    };
};

export const addressFail = error => {
    return {
        type: actionTypes.GET_ADDRESS_FAIL,
        error: error
    };
};

// Add new address Action 
export const addNewAddress = (data) => {
    const URL = constants.PROXY_URL + constants.ADDRESS;
    const body = data;
    const options = utils.OPTIONS;
    return dispatch => {
        dispatch(newAddressStart());
        axios
            .post(URL, body, options)
            .then(res => {
                console.log(res);
                dispatch(newAddressSuccess(res.data.address));
            })
            .catch(err => {
                console.log(err);
                dispatch(newAddressFail(err));
            });
    };
};

// remove address Action 
export const removeAddress = (data) => {
    const URL = constants.PROXY_URL + constants.ADDRESS + `${data._id}`;
    const options = utils.OPTIONS;
    return dispatch => {
        dispatch(removeAddressStart(data));
        axios
            .delete(URL, options)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };
};

// Fetch addresses Action 
export const fetchAddresses = () => {
    const URL = constants.PROXY_URL + constants.ADDRESS + "user/";
    const OPTIONS = utils.OPTIONS;
    return dispatch => {
        dispatch(addressStart());
        axios
            .get(URL, OPTIONS)
            .then(res => {
                console.log(res);
                localStorage.setItem('addresses', res.data.addresses);
                dispatch(addressSuccess(res.data.addresses));
            })
            .catch(err => {
                console.log(err);
                dispatch(addressFail(err));
            });
    };
};
