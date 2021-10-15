import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import translateReducer from "./translateReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";
import modalReducer from "./modalReducer";
import giftReducer from "./giftReducer";
import taskReducer from "./TaskReducer";
import userPageReducer from "./userPageReducer";
import usersGamesReducer from "./userGameReducer";
import winnerReducer from "./winnerReducer";
import usersTasksReducer from "./usersTasksReducer";

const rootReducer = combineReducers({
    lang: translateReducer,
    user: userReducer,
    error: errorReducer,
    games: gameReducer,
    modal: modalReducer,
    gifts: giftReducer,
    tasks: taskReducer,
    userPage: userPageReducer,
    userGame: usersGamesReducer,
    winners: winnerReducer,
    usersTasks: usersTasksReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
