import axios from "axios";
import {setUser} from "../reducers/userReducer";
import {setError, setLoading} from "../reducers/errorReducer";

export const createGoogleAccount = googleUser => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/googleData', googleUser)
            .then(res => {
                console.log(res)
                if (res.data.success) {
                    dispatch(setUser(res.data.model));
                }
                dispatch(setError(res.data.message))
            })
            .catch(err => {
                console.log(err)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => {
                dispatch(setLoading(false))
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            });
    };
};
