const GET_ALL_TASKS = 'GET_ALL_TASKS'
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TASKS_FOR_GAME = 'TASKS_FOR_GAME'
const UPDATE_TASKS_FOR_GAME = 'UPDATE_TASKS_FOR_GAME'
const TASK_ONE_FROM_SERVER = 'TASK_ONE_FROM_SERVER'
const INITIAL_SELECTED_TASK_ONE = 'INITIAL_SELECTED_TASK_ONE'
const DATA_TASKS_ONE = 'DATA_TASKS_ONE'
const SELECTED_TASK_ONE = 'SELECTED_TASK_ONE'
const DATA_TASKS_TWO = 'DATA_TASKS_TWO'
const DATA_TASKS_THREE = 'DATA_TASKS_THREE'

const defaultState = {
    tasksProto: [
        /*steam*/
        {taskTypeId: 1, taskType: 1, task: 'Add game to wishlist', url: 'https://www.steam.com'},
        {taskTypeId: 2, taskType: 1, task: 'Join to the group', url: 'https://www.steam.com'},
        {taskTypeId: 3, taskType: 1, task: 'Follow group', url: 'https://www.steam.com'},
        /*twitter*/
        {taskTypeId: 4, taskType: 2, task: 'follow', url: 'https://www.twitter.com'},
        {taskTypeId: 5, taskType: 2, task: 'Like', url: 'https://www.twitter.com'},
        {taskTypeId: 6, taskType: 2, task: 'repost', url: 'https://www.twitter.com'},
        {taskTypeId: 7, taskType: 2, task: 'post', url: 'https://www.twitter.com'},
        /*youtube*/
        {taskTypeId: 8, taskType: 3, task: 'Watch the video', url: 'https://www.youtube.com'},
        {taskTypeId: 9, taskType: 3, task: 'Like', url: 'https://www.youtube.com'},
        {taskTypeId: 10, taskType: 3, task: 'comment', url: 'https://www.youtube.com'},
        {taskTypeId: 11, taskType: 3, task: 'Subscribe', url: 'https://www.youtube.com'},
        /*discord*/
        {taskTypeId: 12, taskType: 4, task: 'Join the server', url: 'https://www.discord.com'},
        /*facebook*/
        {taskTypeId: 13, taskType: 5, task: 'Like post', url: 'https://www.facebook.com'},
        {taskTypeId: 14, taskType: 5, task: 'Share post', url: 'https://www.facebook.com'},
        {taskTypeId: 15, taskType: 5, task: 'Like fanpage', url: 'https://www.facebook.com'},
        {taskTypeId: 16, taskType: 5, task: 'comment post', url: 'https://www.facebook.com'},
        /*instagram*/
        {taskTypeId: 17, taskType: 6, task: 'Like photo', url: 'https://www.instagram.com'},
        {taskTypeId: 18, taskType: 6, task: 'comment', url: 'https://www.instagram.com'},
        {taskTypeId: 19, taskType: 6, task: 'share', url: 'https://www.instagram.com'},
        /*reddit*/
        {taskTypeId: 20, taskType: 7, task: 'join group', url: 'https://www.reddit.com'},
        {taskTypeId: 21, taskType: 7, task: 'Give upvote', url: 'https://www.reddit.com'},
        /*website*/
        {taskTypeId: 22, taskType: 8, task: 'Check website', url: 'https://www.website.com'},
    ],
    tasksForGame: [],
    tasks: [],
    taskOneFromServer: null,
    initialSelectedTaskOne: null,
    dataTasksOne: null,
    selectedTaskOne: null,
    dataTasksTwo: null,
    dataTasksThree: null,
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
        case TASKS_FOR_GAME:
            if (action.payload === null)
                return {...state, tasksForGame: null}

            let tempTasksForGame = state.tasksProto
            tempTasksForGame.forEach(item => {
                item.game_id = action.payload.id
            })
            return {
                ...state,
                tasksForGame: tempTasksForGame
            };
        case INITIAL_SELECTED_TASK_ONE:
            if (action.payload === null)
                return {...state, initialSelectedTaskOne: null}
            let selectedType = state.tasksForGame.filter(item => item.taskTypeId == action.payload.taskTypeId)
            return {
                ...state,
                initialSelectedTaskOne: state.tasksForGame.filter(item => item.taskType == selectedType[0].taskType)
            }
        case UPDATE_TASKS_FOR_GAME:
            let tempDataTaskOne = state.tasksForGame.filter(task => task.taskTypeId == action.payload.taskTypeId)
            let modifyTask = tempDataTaskOne[0]
            modifyTask.url = action.payload.url
            // console.log(modifyTask)
            let tempUpdateTasksForGame = state.tasksForGame.filter(task => task.taskTypeId != action.payload.taskTypeId)
            tempUpdateTasksForGame = [modifyTask, ...tempUpdateTasksForGame]
            return {
                ...state,
                tasksForGame: tempUpdateTasksForGame
            }
        case TASK_ONE_FROM_SERVER:
            return {
                ...state,
                taskOneFromServer: action.payload
            };
        case SELECTED_TASK_ONE:
            console.log('SELECTED_TASK_ONE', action.payload)
            if (action.payload === null) {
                return {...state, selectedTaskOne: null}
            }
            return {
                ...state,
                selectedTaskOne: action.payload
            };
        case DATA_TASKS_ONE:
            if (action.payload === null) {
                return {
                    ...state,
                    dataTasksOne: null
                }
            }
            return {
                ...state,
                dataTasksOne: state.tasksForGame.filter(item => item.taskType == action.payload)
            };
        default:
            return state
    }
};

export const fetchAllTasksAction = tasks => ({type: GET_ALL_TASKS, payload: tasks})
export const addTaskAction = task => ({type: ADD_TASK, payload: task})
export const updateTaskAction = task => ({type: UPDATE_TASK, payload: task})
export const removeTaskAction = id => ({type: REMOVE_TASK, payload: id})

export const setTasksForGameAction = (game) => ({type: TASKS_FOR_GAME, payload: game})
export const setInitialSelectedTaskOne = serverTask => ({type: INITIAL_SELECTED_TASK_ONE, payload: serverTask})
export const updateTasksForGameAction = task => ({type: UPDATE_TASKS_FOR_GAME, payload: task})
export const setTaskOneFromServer = (task) => ({type: TASK_ONE_FROM_SERVER, payload: task})
export const dataTasksOneAction = task => ({type: DATA_TASKS_ONE, payload: task})
export const setSelectedTaskOneAction = task => ({type: SELECTED_TASK_ONE, payload: task})
