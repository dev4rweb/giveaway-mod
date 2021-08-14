import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import translateReducer from "./translateReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    translate: translateReducer,
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
