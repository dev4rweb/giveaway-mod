const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'
const SET_POSTS = 'SET_POSTS'

const defaultState = {
    isAuth: false,
    user: {

    },
    posts: []
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
};

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, payload: isAuth})
export const setUser = (user) => ({type: SET_USER, payload: user})
export const setPosts = (posts) => ({type: SET_POSTS, payload: posts})
