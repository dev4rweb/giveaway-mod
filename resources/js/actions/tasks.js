import axios from "axios";
import {setError, setLoading} from "../reducers/errorReducer";
import {addTaskAction, fetchAllTasksAction, updateTaskAction} from "../reducers/TaskReducer";
import {removeGiftAction} from "../reducers/giftReducer";

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
            .finally(()=> dispatch(setLoading(false)));
    };
};
