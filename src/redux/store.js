import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const singleReducer = combineReducers({
 
});

//Creates an empty store object{}
const store = createStore(singleReducer, applyMiddleware(logger, thunk));

console.log(store.getState());

export default store;