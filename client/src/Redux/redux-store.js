import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import postReducer from "./post-reducer";

let reducers = combineReducers({
    post: postReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store

export default store;