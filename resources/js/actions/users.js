import axios from "axios";
import {deleteUser, setUser} from "../reducers/userReducer";
import {setError, setLoading} from "../reducers/errorReducer";

export const removeUser = (userId) => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.delete(`/admin-panel/destroy/${userId}`)
            .then(res => {
                // console.log('removeUser',res)
                if (res.data.success) {
                    dispatch(deleteUser(userId))
                }
                dispatch(setError(res.data.message))
            })
            .catch(err => {
                // console.log('removeUser',err)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    }
};

export const updateUser = user => {
    delete user.games
    delete user.winners
    delete user.socialUlogins
    delete user.tasks
    const fd = new FormData()
    for (let key in user) fd.set(key, user[key])
    // console.log('updateUser', user)
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/update-votes', fd)
            .then(res => {
                // console.log('/update-votes', res.data)
                res.data.success ?
                    dispatch(setUser(res.data.model)) :
                    dispatch(setError(res.data.message))
            })
            .catch(err => {
                // console.log(err.response.data.message)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => dispatch(setLoading(false)));
    };
};
