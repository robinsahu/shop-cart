import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // this is something that is nice to use to debug redux

import rootReducer from "./root-reducer"; //this is rootReducer object

const middlewares = [logger];  //these are some of the middleware function ,methods, object as an arry

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
