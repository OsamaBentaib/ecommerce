import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import orderReducer from "./order";
import userReducer from "./user";
import productReducer from "./product";
import wishlistReducer from "./wishlist";
import passwordReducer from "./password";
import addressReducer from "./address";

export default combineReducers({
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
  product: productReducer,
  wishlist: wishlistReducer,
  password: passwordReducer,
  address: addressReducer,
});
