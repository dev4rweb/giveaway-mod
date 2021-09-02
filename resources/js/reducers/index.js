import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import translateReducer from "./translateReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";
import modalReducer from "./modalReducer";
import taskTypeReducer from "./taskTypeReducer";
import giftReducer from "./giftReducer";
import taskReducer from "./TaskReducer";
import userPageReducer from "./userPageReducer";
import usersGamesReducer from "./userGameReducer";

const rootReducer = combineReducers({
    lang: translateReducer,
    user: userReducer,
    error: errorReducer,
    games: gameReducer,
    modal: modalReducer,
    taskType: taskTypeReducer,
    gifts: giftReducer,
    tasks: taskReducer,
    userPage: userPageReducer,
    userGame: usersGamesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
