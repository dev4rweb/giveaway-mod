const FETCH_ALL_USERS_GAMES = 'FETCH_ALL_USERS_GAMES'
const ADD_USER_GAME = 'ADD_USERS_GAMES'
const UPDATE_USER_GAME = 'UPDATE_USER_GAME'
const REMOVE_USER_GAME = 'REMOVE_USER_GAME'

const defaultState = {
    usersGames: []
}

export default function usersGamesReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_ALL_USERS_GAMES:
            return {...state, usersGames: action.payload}
        case ADD_USER_GAME:
            return {...state, usersGames: [...state.usersGames, action.payload]}
        case UPDATE_USER_GAME:
            const tempArray = state.usersGames.filter(userGame => userGame.id !== action.payload.id)
            return {...state, usersGames: [...tempArray, action.payload]}
        case REMOVE_USER_GAME:
            return {...state, usersGames: state.usersGames.filter(userGame => userGame.id !== action.payload)}
        default:
            return state
    }
};

export const fetchAllUsersGamesAction = usersGames => ({type: FETCH_ALL_USERS_GAMES, payload: usersGames})
export const addUserGameAction = userGame => ({type: ADD_USER_GAME, payload: userGame})
export const updateUserGameAction = userGame => ({type: UPDATE_USER_GAME, payload: userGame})
export const removeUserGameAction = id => ({type: REMOVE_USER_GAME, payload: id})
