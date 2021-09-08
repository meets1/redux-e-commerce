import mainReducer from "./reducer";
import { addToCartReducer, wishlistReducer } from "./reducer";
import { singleProductFetchReducer } from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mainReducer,
  singleProduct: singleProductFetchReducer,
  addToCartReducer,
  wishlistReducer,
});
export default rootReducer;
