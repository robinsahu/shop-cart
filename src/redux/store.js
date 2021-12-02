import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // this is something that is nice to use to debug redux
import { persistStore } from "redux-persist"; // it allows our browser to actually cache and store
import rootReducer from "./root-reducer"; //this is rootReducer object

const middlewares = [logger]; //these are some of the middleware function ,methods, object as an arry

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default { store, persistor };
