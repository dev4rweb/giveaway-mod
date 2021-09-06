const FETCH_ALL_WINNERS = 'FETCH_ALL_WINNERS'
const ADD_WINNER = 'ADD_WINNER'
const UPDATE_WINNER = 'UPDATE_WINNER'
const REMOVE_WINNER = 'REMOVE_WINNER'

const defaultState = {
    winners: []
}

export default function winnerReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_ALL_WINNERS:
            return {...state, winners: action.payload}
        case ADD_WINNER:
            return {...state, winners: [...state.winners, action.payload]}
        case UPDATE_WINNER:
            const tempArray = state.winners.filter(winner => winner.id !== action.payload.id)
            return {...state, winners: [...tempArray, action.payload]}
        case REMOVE_WINNER:
            return {...state, winners: state.winners.filter(winner => winner.id !== action.payload)}
        default:
            return state
    }
};

export const fetchAllWinnersAction = winners => ({type: FETCH_ALL_WINNERS, payload: winners})
export const addWinnerAction = winner => ({type: ADD_WINNER, payload: winner})
export const updateWinnerAction = winner => ({type: UPDATE_WINNER, payload: winner})
export const removeWinnerAction = id => ({type: REMOVE_WINNER, payload: id})
