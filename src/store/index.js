// import { Platform } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers";

// TODO pomyslec o redux-middleware-promise

const initialState = {};

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(
  rootReducer,
  initialState,
  compose(middleware)
);
