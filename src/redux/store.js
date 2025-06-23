//import { createStore } from "redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import libraryReducer from "./libraryReducer";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( libraryReducer, composeEnhacers(applyMiddleware()));

export default store;


/*
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer, composeEnhacers(
  applyMiddleware
));

export default store;*/