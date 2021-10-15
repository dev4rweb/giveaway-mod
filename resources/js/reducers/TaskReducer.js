import taskProtoType from "../utils/taskProtoType";

const GET_ALL_TASKS = 'GET_ALL_TASKS'
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

const TASKS_FOR_GAME = 'TASKS_FOR_GAME'
const TASKS_FOR_GAME_TWO = 'TASKS_FOR_GAME_TWO'
const TASKS_FOR_GAME_THREE = 'TASKS_FOR_GAME_THREE'
const UPDATE_TASKS_FOR_GAME = 'UPDATE_TASKS_FOR_GAME'
const UPDATE_TASKS_FOR_GAME_TWO = 'UPDATE_TASKS_FOR_GAME_TWO'
const UPDATE_TASKS_FOR_GAME_THREE = 'UPDATE_TASKS_FOR_GAME_THREE'

const TASK_ONE_FROM_SERVER = 'TASK_ONE_FROM_SERVER'
const INITIAL_SELECTED_TASK_ONE = 'INITIAL_SELECTED_TASK_ONE'
const DATA_TASKS_ONE = 'DATA_TASKS_ONE'
const SELECTED_TASK_ONE = 'SELECTED_TASK_ONE'

const TASK_TWO_FROM_SERVER = 'TASK_TWO_FROM_SERVER'
const INITIAL_SELECTED_TASK_TWO = 'INITIAL_SELECTED_TASK_TWO'
const DATA_TASKS_TWO = 'DATA_TASKS_TWO'
const SELECTED_TASK_TWO = 'SELECTED_TASK_TWO'

const TASK_THREE_FROM_SERVER = 'TASK_THREE_FROM_SERVER'
const INITIAL_SELECTED_TASK_THREE = 'INITIAL_SELECTED_TASK_THREE'
const DATA_TASKS_THREE = 'DATA_TASKS_THREE'
const SELECTED_TASK_THREE = 'SELECTED_TASK_THREE'

const defaultState = {
    tasksProto: taskProtoType,
    tasksProtoTwo: taskProtoType,
    tasksProtoThree: taskProtoType,
    tasksForGame: [],
    tasksForGameTwo: [],
    tasksForGameThree: [],
    tasks: [],

    taskOneFromServer: null,
    initialSelectedTaskOne: null,
    dataTasksOne: null,
    selectedTaskOne: null,

    taskTwoFromServer: null,
    initialSelectedTaskTwo: null,
    dataTasksTwo: null,
    selectedTaskTwo: null,

    taskThreeFromServer: null,
    initialSelectedTaskThree: null,
    dataTasksThree: null,
    selectedTaskThree: null,
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
            // console.log('TASKS_FOR_GAME ', action.payload)
            if (action.payload === null) {
                // console.log('TASKS_FOR_GAME NULL!!!', tempTasksForGame)
                return {...state, tasksForGame: null};
            }

            let tempTasksForGame = state.tasksProto
            tempTasksForGame.forEach(item => {
                item.game_id = action.payload.id
            })

            // console.log('TASKS_FOR_GAME ', tempTasksForGame)
            return {
                ...state,
                tasksForGame: tempTasksForGame
            };
        case UPDATE_TASKS_FOR_GAME:
            // console.log('UPDATE_TASKS_FOR_GAME ', action.payload)
            let updateTaskForGame = state.tasksForGame
            updateTaskForGame.forEach(item => item.id = action.payload.id)
            let tempDataTaskOne = updateTaskForGame.find(task => task.taskTypeId == action.payload.taskTypeId)
            // console.log('UPDATE_TASKS_FOR_GAME',updateTaskForGame)
            let modifyTask = tempDataTaskOne
            modifyTask.url = action.payload.url
            // console.log('UPDATE_TASKS_FOR_GAME ', modifyTask)
            let tempUpdateTasksForGame = updateTaskForGame.filter(task => task.taskTypeId != action.payload.taskTypeId)
            tempUpdateTasksForGame = [modifyTask, ...tempUpdateTasksForGame]
            return {
                ...state,
                tasksForGame: tempUpdateTasksForGame
            }

        case TASKS_FOR_GAME_TWO:
            if (action.payload === null)
                return {...state, tasksForGameTwo: null}

            let tempTasksForGameTwo = state.tasksProtoTwo
            tempTasksForGameTwo.forEach(item => {
                item.game_id = action.payload.id
            })
            return {
                ...state,
                tasksForGameTwo: tempTasksForGameTwo
            };
        case UPDATE_TASKS_FOR_GAME_TWO:
            // console.log('UPDATE_TASKS_FOR_GAME_TWO ', action.payload)
            let updateTaskForGameTwo = state.tasksForGameTwo
            updateTaskForGameTwo.forEach(item => item.id = action.payload.id)
            let tempDataTaskTwo = updateTaskForGameTwo.find(task => task.taskTypeId == action.payload.taskTypeId)
            // console.log('UPDATE_TASKS_FOR_GAME_TWO',tempDataTaskTwo)
            let modifyTaskTwo = tempDataTaskTwo
            // console.log(modifyTaskTwo)
            modifyTaskTwo.url = action.payload.url
            let tempUpdateTasksForGameTwo = updateTaskForGameTwo.filter(task => task.taskTypeId != action.payload.taskTypeId)
            tempUpdateTasksForGameTwo = [modifyTaskTwo, ...tempUpdateTasksForGameTwo]
            return {
                ...state,
                tasksForGameTwo: tempUpdateTasksForGameTwo
            }

        case TASKS_FOR_GAME_THREE:
            if (action.payload === null)
                return {...state, tasksForGameThree: null}

            let tempTasksForGameThree = state.tasksProtoThree
            tempTasksForGameThree.forEach(item => {
                item.game_id = action.payload.id
            })
            return {
                ...state,
                tasksForGameThree: tempTasksForGameThree
            };
        case UPDATE_TASKS_FOR_GAME_THREE:
            // console.log('UPDATE_TASKS_FOR_GAME_THREE ', action.payload)
            let updateTaskForGameThree = state.tasksForGameThree
            updateTaskForGameThree.forEach(item => item.id = action.payload.id)
            let tempDataTaskThree = updateTaskForGameThree.find(task => task.taskTypeId == action.payload.taskTypeId)
            let modifyTaskThree = tempDataTaskThree
            modifyTaskThree.url = action.payload.url
            // console.log(modifyTask)
            let tempUpdateTasksForGameThree = updateTaskForGameThree.filter(task => task.taskTypeId != action.payload.taskTypeId)
            tempUpdateTasksForGameThree = [modifyTaskThree, ...tempUpdateTasksForGameThree]
            return {
                ...state,
                tasksForGameThree: tempUpdateTasksForGameThree
            }

        case INITIAL_SELECTED_TASK_ONE:
            if (action.payload === null)
                return {...state, initialSelectedTaskOne: null}
            let selectedType = state.tasksForGame.filter(item => item.taskTypeId == action.payload.taskTypeId)
            return {
                ...state,
                initialSelectedTaskOne: state.tasksForGame.filter(item => item.taskType == selectedType[0].taskType)
            }
        case TASK_ONE_FROM_SERVER:
            return {
                ...state,
                taskOneFromServer: action.payload
            };
        case SELECTED_TASK_ONE:
            // console.log('SELECTED_TASK_ONE', action.payload)
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

        case INITIAL_SELECTED_TASK_TWO:
            if (action.payload === null)
                return {...state, initialSelectedTaskTwo: null}
            let selectedTypeTwo = state.tasksForGameTwo.filter(item => item.taskTypeId == action.payload.taskTypeId)
            return {
                ...state,
                initialSelectedTaskTwo: state.tasksForGameTwo.filter(item => item.taskType == selectedTypeTwo[0].taskType)
            }
        case TASK_TWO_FROM_SERVER:
            return {
                ...state,
                taskTwoFromServer: action.payload
            };
        case SELECTED_TASK_TWO:
            // console.log('SELECTED_TASK_ONE', action.payload)
            if (action.payload === null) {
                return {...state, selectedTaskTwo: null}
            }
            return {
                ...state,
                selectedTaskTwo: action.payload
            };
        case DATA_TASKS_TWO:
            if (action.payload === null) {
                return {
                    ...state,
                    dataTasksTwo: null
                }
            }
            return {
                ...state,
                dataTasksTwo: state.tasksForGameTwo.filter(item => item.taskType == action.payload)
            };

        case INITIAL_SELECTED_TASK_THREE:
            if (action.payload === null)
                return {...state, initialSelectedTaskThree: null}
            let selectedTypeThree = state.tasksForGameThree.filter(item => item.taskTypeId == action.payload.taskTypeId)
            return {
                ...state,
                initialSelectedTaskThree: state.tasksForGameThree.filter(item => item.taskType == selectedTypeThree[0].taskType)
            }
        case TASK_THREE_FROM_SERVER:
            return {
                ...state,
                taskThreeFromServer: action.payload
            };
        case SELECTED_TASK_THREE:
            // console.log('SELECTED_TASK_ONE', action.payload)
            if (action.payload === null) {
                return {...state, selectedTaskThree: null}
            }
            return {
                ...state,
                selectedTaskThree: action.payload
            };
        case DATA_TASKS_THREE:
            if (action.payload === null) {
                return {
                    ...state,
                    dataTasksThree: null
                }
            }
            return {
                ...state,
                dataTasksThree: state.tasksForGameThree.filter(item => item.taskType == action.payload)
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
export const updateTasksForGameAction = task => ({type: UPDATE_TASKS_FOR_GAME, payload: task})
export const setTasksForGameTwoAction = (game) => ({type: TASKS_FOR_GAME_TWO, payload: game})
export const updateTasksForGameTwoAction = task => ({type: UPDATE_TASKS_FOR_GAME_TWO, payload: task})
export const setTasksForGameThreeAction = (game) => ({type: TASKS_FOR_GAME_THREE, payload: game})
export const updateTasksForGameThreeAction = task => ({type: UPDATE_TASKS_FOR_GAME_THREE, payload: task})

export const setInitialSelectedTaskOne = serverTask => ({type: INITIAL_SELECTED_TASK_ONE, payload: serverTask})
export const setTaskOneFromServer = (task) => ({type: TASK_ONE_FROM_SERVER, payload: task})
export const dataTasksOneAction = task => ({type: DATA_TASKS_ONE, payload: task})
export const setSelectedTaskOneAction = task => ({type: SELECTED_TASK_ONE, payload: task})

export const setInitialSelectedTaskTwo = serverTask => ({type: INITIAL_SELECTED_TASK_TWO, payload: serverTask})
export const setTaskTwoFromServer = (task) => ({type: TASK_TWO_FROM_SERVER, payload: task})
export const dataTasksTwoAction = task => ({type: DATA_TASKS_TWO, payload: task})
export const setSelectedTaskTwoAction = task => ({type: SELECTED_TASK_TWO, payload: task})

export const setInitialSelectedTaskThree = serverTask => ({type: INITIAL_SELECTED_TASK_THREE, payload: serverTask})
export const setTaskThreeFromServer = (task) => ({type: TASK_THREE_FROM_SERVER, payload: task})
export const dataTasksThreeAction = task => ({type: DATA_TASKS_THREE, payload: task})
export const setSelectedTaskThreeAction = task => ({type: SELECTED_TASK_THREE, payload: task})
