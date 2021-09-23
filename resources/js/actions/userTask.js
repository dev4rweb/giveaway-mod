import {setError, setLoading} from "../reducers/errorReducer";
import axios from "axios";
import {
    addUserTaskAction,
    fetchAllUsersTasksAction,
    removeUserTaskAction,
    updateUserTaskAction
} from "../reducers/usersTasksReducer";

export const getAllUsersTasks = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('/users-tasks')
            .then(res => {
                if (res.data.success) dispatch(fetchAllUsersTasksAction(res.data.models))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};

export const createUserTask = userTask => {
    const fd = new FormData();
    for (let key in userTask)
        fd.set(key, userTask[key])

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/user-task/create', fd)
            .then(res => {
                if (res.data.success) dispatch(addUserTaskAction(res.data.model))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(() => dispatch(setLoading(false)));
    };
};

export const updateUserTask = userTask => {
    const fd = new FormData()
    for (let key in userTask) fd.set(key, userTask[key])

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/user-task/update', fd)
            .then(res => {
                if (res.data.success) dispatch(updateUserTaskAction(res.data.model))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};

export const removeUserTask = id => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.delete(`/user-task/${id}`)
            .then(res => {
                if (res.data.success) dispatch(removeUserTaskAction(id))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)))
    };
};
