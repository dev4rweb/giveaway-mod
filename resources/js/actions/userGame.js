import axios from "axios";
import {setError, setLoading} from "../reducers/errorReducer";
import {
    addUserGameAction,
    fetchAllUsersGamesAction,
    removeUserGameAction,
    updateUserGameAction
} from "../reducers/userGameReducer";

export const getAllUsersGames = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('/users_games')
            .then(res => {
                // console.log('all users games', res.data)
                if (res.data.success) dispatch(fetchAllUsersGamesAction(res.data.models))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};

export const createUserGame = userGame => {
    // console.log('createUserGame', userGame)
    const fd = new FormData();
    for (let key in userGame)
        fd.set(key, userGame[key])

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/user_game/create', fd)
            .then(res => {
                if (res.data.success) {
                    // console.log('/user_game/create', res.data)
                    dispatch(addUserGameAction(res.data.model))
                    dispatch(setError('member added'))
                } else dispatch(setError(res.data.message))
            })
            .catch(err => {
                // console.log('err', err)
                dispatch(setError(err.response.data.message))
            })
            .finally(() => dispatch(setLoading(false)));
    };
};

export const updateUserGame = userGame => {
    console.log('updateUserGame', userGame)
    const fd = new FormData();
    for (let key in userGame) fd.set(key, userGame[key])

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/user_game/update', fd)
            .then(res => {
                if (res.data.success) dispatch(updateUserGameAction(res.data.model))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)))
    };
};

export const removeUserGame = id => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.delete(`/user_game/${id}`)
            .then(res => {
                if (res.data.success) dispatch(removeUserGameAction(id))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};
