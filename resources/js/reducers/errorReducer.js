const SET_ERROR = 'SET_ERROR'
const SET_LOADING = 'SET_LOADING'

const defaultState = {
    error: '',
    isLoading: false,
}

export default function errorReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
};

export const setLoading = (isLoading) => ({type: SET_LOADING, payload: isLoading})
export const setError = (error) => ({type: SET_ERROR, payload: error})
