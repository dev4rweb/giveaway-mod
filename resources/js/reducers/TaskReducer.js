const GET_ALL_TASKS = 'GET_ALL_TASKS'
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

const defaultState = {
    tasks: [],
}

export default function taskReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_ALL_TASKS:
            return {... state, tasks: action.payload}
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            const tempArray = state.tasks.filter(task => task.id !== action.payload.id)
            return {
                ...state,
                tasks: [
                    ...tempArray,
                    action.payload
                ]
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state
    }
};

export const fetchAllTasksAction = tasks => ({type: GET_ALL_TASKS, payload: tasks})
export const addTaskAction = task => ({type: ADD_TASK, payload: task})
export const updateTaskAction = task => ({type: UPDATE_TASK, payload: task})
export const removeTaskAction = id => ({type: REMOVE_TASK, payload: id})
