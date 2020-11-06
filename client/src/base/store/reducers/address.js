import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    addresses: [],
    error: null,
    loading: false,
    addAddressLoading: false,
    addAddressSuccess: false,
};
// GET ADDRESS ITEMS
const addressStart = (state, action) => {
    return updateObject(state, {
        error: null,
        addAddressLoading: false,
    });
};

const addressSuccess = (state, action) => {
    return updateObject(state, {
        addresses: action.payload,
        error: null,
        addAddressLoading: false,
        addAddressSuccess: true,
    });
};

const addressFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        addAddressLoading: false,
    });
};

// ADD ITEM TO CART
const addNewAddressStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const addNewAddressSuccess = (state, action) => {
    state.addresses.push(action.payload);
    return updateObject(state, {
        error: null,
        loading: false,
    });
};

const addNewAddressFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};
// remove From cart
const removeAddress = (state, action) => {
    const newAddress = state.addresses.filter(function (ele) { return ele !== action.payload; });
    return updateObject(state, {
        addresses: newAddress
    });
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDRESS_START:
            return addressStart(state, action);
        case actionTypes.GET_ADDRESS_SUCCESS:
            return addressSuccess(state, action);
        case actionTypes.GET_ADDRESS_FAIL:
            return addressFail(state, action);
        // Add new address
        case actionTypes.ADD_NEW_ADDRESS_START:
            return addNewAddressStart(state, action);
        case actionTypes.ADD_NEW_ADDRESS_SUCCESS:
            return addNewAddressSuccess(state, action);
        case actionTypes.ADD_NEW_ADDRESS_FAIL:
            return addNewAddressFail(state, action);
        // remove from cart
        case actionTypes.REMOVE_ADDRESS:
            return removeAddress(state, action);
        default:
            return state;
    }
};

export default addressReducer;