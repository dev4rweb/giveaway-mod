const SET_COUNT = 'SET_COUNT'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'

const defaultState = {
    isAuth: false,
    user: {

    },
    count: 0
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
};

export const setCount = (count) => ({type: SET_COUNT, payload: count})
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, payload: isAuth})
export const setUser = (user) => ({type: SET_USER, payload: user})
