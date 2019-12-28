import { combineReducers } from "redux";
import productReducers from "./products";
import cartReducers from "./cart";

export default combineReducers({
  productReducers,
  cartReducers
});
