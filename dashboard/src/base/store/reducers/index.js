import { combineReducers } from "redux";
import authReducer from "./auth";
import productsReducer from "./products";
import orderReducer from "./orders";
import userReducer from "./users";
import analyseReducer from "./analyse";

export default combineReducers({
  auth: authReducer,
  product: productsReducer,
  order: orderReducer,
  analyse: analyseReducer,
  user: userReducer,
});
