const SET_GAMES = 'SET_GAMES'
const SET_SPONSOR_GAMES = 'SET_SPONSOR_GAMES'

const defaultState = {
    games: [],
    sponsorGames: []
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
        default:
            return state
    }
};

export const setGames = (games) => ({type: SET_GAMES, payload: games})
export const setSponsorGames = (sponsorGames) => ({type: SET_SPONSOR_GAMES, payload: sponsorGames})
