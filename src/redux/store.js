import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productsReducer.js"

const singleReducer = combineReducers({
 productsReducer,
});

//Creates an empty store object{}
const store = createStore(singleReducer, applyMiddleware(logger, thunk));

console.log(store.getState());

export default store;