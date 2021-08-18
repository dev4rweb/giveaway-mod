import axios from "axios";
import {deleteUser} from "../reducers/userReducer";
import {setError, setLoading} from "../reducers/errorReducer";

export const removeUser = (userId) => {
    return async (dispatch) => {
        await axios.delete(`/admin-panel/destroy/${userId}`)
            .then(res => {
                console.log('removeUser',res)
                if (res.data.success) {
                    dispatch(deleteUser(userId))
                }
                dispatch(setError(res.data.message))
            })
            .catch(err => {
                console.log('removeUser',err)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    }
};
