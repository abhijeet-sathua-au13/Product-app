import { createStore, compose, applyMiddleware } from "redux";

import thunk from '../middlewares/thunk'

import productReducer from "../reducers/products";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const appMiddleware = applyMiddleware(...middlewares);

export default createStore(productReducer, composer(appMiddleware));
