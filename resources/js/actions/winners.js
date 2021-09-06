import {setError, setLoading} from "../reducers/errorReducer";
import axios from "axios";
import {addWinnerAction, fetchAllWinnersAction, removeWinnerAction} from "../reducers/winnerReducer";

export const getAllWinners = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('/winners')
            .then(res => {
                // console.log('all winners', res.data)
                res.data.success ?
                    dispatch(fetchAllWinnersAction(res.data.models)) :
                    dispatch(setError(res.data.message))
            })
            // .catch(err => console.log(err.response.message))
            .catch(err => dispatch(setError(err.response.message)))
            .finally(() => dispatch(setLoading(false)));
    };
};

export const createWinner = winner => {
    const fd = new FormData();
    for (let key in winner) fd.set(key, winner[key])

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/winner/create', fd)
            .then(res => {
                // console.log(res.data)
                res.data.success ?
                    dispatch(addWinnerAction(res.data.model)) :
                    dispatch(setError(res.data.message))
            })
            // .catch(err => console.log(err.data))
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=>dispatch(setLoading(false)))
    };
};

export const removeWinner = id => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        await axios.delete(`/winner/${id}`)
            .then(res => {
                // console.log(res.data)
                res.data.success ?
                    dispatch(removeWinnerAction(id)) :
                    dispatch(setError(res.data.message))
            })
            // .catch(err => console.log(err.data))
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};
