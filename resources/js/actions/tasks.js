import axios from "axios";
import {setError, setLoading} from "../reducers/errorReducer";
import {
    addTaskAction,
    dataTasksOneAction, dataTasksThreeAction,
    dataTasksTwoAction,
    fetchAllTasksAction,
    setInitialSelectedTaskOne,
    setInitialSelectedTaskThree,
    setInitialSelectedTaskTwo,
    setSelectedTaskOneAction, setSelectedTaskThreeAction,
    setSelectedTaskTwoAction,
    setTaskOneFromServer,
    setTasksForGameAction, setTaskThreeFromServer,
    setTaskTwoFromServer,
    updateTaskAction
} from "../reducers/TaskReducer";
import {fetchAllGifts, removeGiftAction} from "../reducers/giftReducer";
import {setEditPage} from "../reducers/modalReducer";
import {setTaskOne, setTaskThree, setTaskTwo} from "../reducers/taskTypeReducer";
import {useSelector} from "react-redux";

export const getTasks = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('/tasks')
            .then(res => {
                res.data.success ?
                    dispatch(fetchAllTasksAction(res.data.models)) :
                    dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.message)))
            .finally(() => dispatch(setLoading(false)));
    };
};

export const createTask = task => {
    const fd = new FormData();
    for (let key in task) {
        fd.set(key, task[key])
    }

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/task/create', fd)
            .then(res => {
                if (res.data.success) dispatch(addTaskAction(res.data.model))
                dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(() => dispatch(setLoading(false)));
    };
};

export const updateTask = task => {
    const fd = new FormData()
    for (let key in task) fd.set(key, task[key])

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/task/update', fd)
            .then(res => {
                // console.log(res)
                if (res.data.success) dispatch(updateTaskAction(res.data.model))
                dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(() => dispatch(setLoading(false)))
    }
};

export const removeTask = id => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.delete(`/task/${id}`)
            .then(res => {
                if (res.data.success) dispatch(removeGiftAction(id))
                dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(() => dispatch(setLoading(false)));
    };
};

export const cleanTempState = () => {
    return async (dispatch) => {
        // dispatch(setLoading(true))
        dispatch(setTaskOne(null))
        dispatch(setTaskTwo(null))
        dispatch(setTaskThree(null))

        dispatch(setInitialSelectedTaskOne(null))
        dispatch(setTaskOneFromServer(null))
        dispatch(dataTasksOneAction(null))
        dispatch(setSelectedTaskOneAction(null))

        dispatch(setInitialSelectedTaskTwo(null))
        dispatch(setTaskTwoFromServer(null))
        dispatch(dataTasksTwoAction(null))
        dispatch(setSelectedTaskTwoAction(null))

        dispatch(setInitialSelectedTaskThree(null))
        dispatch(setTaskThreeFromServer(null))
        dispatch(dataTasksThreeAction(null))
        dispatch(setSelectedTaskThreeAction(null))

        dispatch(setTasksForGameAction(null))
        dispatch(fetchAllGifts([]))
        // dispatch(setLoading(false))
    };
};

export const compareTasks = (serverTask, frontTask) => {
    return async (dispatch) => {
        if (serverTask && frontTask) {
            let task = frontTask
            task.id = serverTask.id
            // console.log('compareTasks', task)
            dispatch(updateTask(task))
        }
        if (serverTask === null && frontTask) {
            // console.log('createTask')
            dispatch(createTask(frontTask))
        }
        if (serverTask && frontTask === null) {
            dispatch(removeTask(serverTask.id))
        }
    }
};
