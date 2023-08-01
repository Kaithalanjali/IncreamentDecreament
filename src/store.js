//this is the store which will be provided to the main app class

//this store will hold the reducers in a single store
import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
//import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";
export default function store(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer,initialState,composeEnhancers(applyMiddleware())
    );
}
//export default store;
