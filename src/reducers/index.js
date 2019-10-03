import { combineReducers } from "redux";

import cryptoReducer from "./crypto.reducer";

export default combineReducers({
  crypto: cryptoReducer
});
