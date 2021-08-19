const SET_GAMES = 'SET_GAMES'
const SET_SPONSOR_GAMES = 'SET_SPONSOR_GAMES'
const SET_FILTER_GAMES = 'SET_FILTER_GAMES'
const SET_GAMES_FROM_API = 'SET_GAMES_FROM_API'
const CREATE_GAME = 'CREATE_GAME'
const UPDATE_GAME = 'UPDATE_GAME'
const REMOVE_GAME = 'REMOVE_GAME'
const CHANGE_NEW_GAME = 'CHANGE_NEW_GAME'
const EDIT_GAME = 'EDIT_GAME'

const defaultState = {
    games: [],
    sponsorGames: [],
    filterGames: [],
    newGame: {},
    editGame: {}
}

export default function gameReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                games: action.payload
            }
        case SET_SPONSOR_GAMES:
            return {
                ...state,
                sponsorGames: action.payload
            }
        case SET_FILTER_GAMES:
            return {
                ...state,
                filterGames: action.payload
            }
        case SET_GAMES_FROM_API:
            return {
                ...state,
                games: action.payload
            }
        case CREATE_GAME:
            return {
                ...state,
                newGame: action.payload
            }
        case CHANGE_NEW_GAME:
            return {
                ...state,
                newGame: action.payload
            }
        case EDIT_GAME:
            return {
                ...state,
                editGame: action.payload
            }
        case UPDATE_GAME:
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        case REMOVE_GAME:
            return {
                ...state,
                games: state.games.filter(game => game.id !== action.payload)
            }
        default:
            return state
    }
};

export const setGames = (games) => ({type: SET_GAMES, payload: games})
export const setSponsorGames = (sponsorGames) => ({type: SET_SPONSOR_GAMES, payload: sponsorGames})
export const setFilterGames = (games) => ({type: SET_FILTER_GAMES, payload: games})
export const createNewGame = (game) => ({type: CREATE_GAME, payload: game})
export const changeNewGame = (game) => ({type: CHANGE_NEW_GAME, payload: game})
export const setUpdatedGame = (game) => ({type: UPDATE_GAME, payload: game})
export const editGame = (game) => ({type: EDIT_GAME, payload: game})
export const deleteGame = (id) => ({type: REMOVE_GAME, payload: id})
