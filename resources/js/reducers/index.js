import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import translateReducer from "./translateReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
    lang: translateReducer,
    user: userReducer,
    error: errorReducer,
    games: gameReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
