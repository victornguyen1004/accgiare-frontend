import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  admin: adminReducer,
  cart: cartReducer,
});

export default rootReducer;
