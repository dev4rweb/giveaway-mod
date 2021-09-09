const SET_USER_PAGE_USER = 'SET_USER_PAGE_USER'
const SET_USER_PAGE_GAMES = 'SET_USER_PAGE_GAMES'
const SET_USER_PAGE_GIFTS = 'SET_USER_PAGE_GIFTS'

const defaultState = {
    user: {},
    games: [],
    gifts:  []
}

export default function userPageReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_PAGE_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_USER_PAGE_GAMES:
            return {
                ...state,
                games: action.payload
            }
        case SET_USER_PAGE_GIFTS:
            return {
                ...state,
                gifts: action.payload
            }
        default:
            return state
    }
};

export const setUserPageUserAction = user => ({type: SET_USER_PAGE_USER, payload: user})
export const setUserPageGamesAction = games => ({type: SET_USER_PAGE_GAMES, payload: games})
export const setUserPageGiftsAction = gifts => ({type: SET_USER_PAGE_GIFTS, payload: gifts})
