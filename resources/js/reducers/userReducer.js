const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_USER = 'SET_USER'
const SET_POSTS = 'SET_POSTS'
const SET_USERS = 'SET_USERS'
const REMOVE_USER = 'REMOVE_USER'

const defaultState = {
    isAuth: false,
    user: {

    },
    posts: [],
    users: []
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
        case SET_USERS:
            return  {
                ...state,
                users: action.payload
            }
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        default:
            return state
    }
};

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, payload: isAuth})
export const setUser = (user) => ({type: SET_USER, payload: user})
export const setPosts = (posts) => ({type: SET_POSTS, payload: posts})
export const setAllUsers = (users) => ({type: SET_USERS, payload: users})
export const deleteUser = (userId) => ({type: REMOVE_USER, payload: userId})
