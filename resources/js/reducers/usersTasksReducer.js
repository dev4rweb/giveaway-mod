const FETCH_ALL_USERS_TASKS = 'FETCH_ALL_USERS_TASKS'
const ADD_USER_TASK = 'ADD_USER_TASK'
const UPDATE_USER_TASK = 'UPDATE_USER_TASK'
const REMOVE_USER_TASK = 'REMOVE_USER_TASK'

const defaultState = {
    usersTasks: []
}

export default function usersTasksReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_ALL_USERS_TASKS:
            return {...state, usersTasks: action.payload}
        case ADD_USER_TASK:
            return {...state, usersTasks: [...state.usersTasks, action.payload]}
        case UPDATE_USER_TASK:
            const tempArray = state.usersTasks.filter(items => items.id !== action.payload.id)
            return {...state, usersTasks: [...tempArray, action.payload]}
        case REMOVE_USER_TASK:
            return {...state, usersTasks: state.usersTasks.filter(items => items.id !== action.payload)}
        default:
            return state
    }
};

export const fetchAllUsersTasksAction = usersTasks => ({type: FETCH_ALL_USERS_TASKS, payload: usersTasks})
export const addUserTaskAction = userTask => ({type: ADD_USER_TASK, payload: userTask})
export const updateUserTaskAction = userTask => ({type: UPDATE_USER_TASK, payload: userTask})
export const removeUserTaskAction = id => ({type: REMOVE_USER_TASK, payload: id})
