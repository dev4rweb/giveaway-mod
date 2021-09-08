import axios from "axios";
import {setError, setLoading} from "../reducers/errorReducer";
import {addGiftAction, fetchAllGifts, removeGiftAction, updateGiftAction} from "../reducers/giftReducer";

export const getGifts = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('/gifts')
            .then(res => {
                // console.log('success', res.data)
                if (res.data.success)
                    dispatch(fetchAllGifts(res.data.models));
                else dispatch(setError(res.data.message));
            })
            .catch(err => {
                dispatch(setError(err.response.message))
            })
            .finally(() => dispatch(setLoading(false)));
    };
};


export const createGift = (gift) => {
    const fd = new FormData();
    for (let key in gift) {
        fd.set(key, gift[key])
    }

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/gift/create', fd)
            .then(res => {
                if (res.data.success) {
                    dispatch(addGiftAction(res.data.model))
                    dispatch(setError(res.data.message))
                } else if (res.data.message.includes('Duplicate entry'))
                    dispatch(setError('Duplicate number'))
                else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(() => {
                dispatch(setLoading(false))
            });
    };
}

export const updateGift = gift => {
    const fd = new FormData();
    for (let key in gift) {
        fd.set(key, gift[key])
    }
    // fd.set('id', gift.id)
    // fd.set('giftKey', gift.giftKey)

    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.post('/gift/update', fd)
            .then(res => {
                if (res.data.success) {
                    dispatch(updateGiftAction(res.data.model))
                    // dispatch(setError(res.data.message))
                } else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};

export const removeGift = id => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.delete(`/gift/${id}`)
            .then(res => {
                if (res.data.success) {
                    dispatch(removeGiftAction(id))
                    dispatch(setError(res.data.message))
                } else dispatch(setError(res.data.message))
            })
            .catch(err => dispatch(setError(err.response.data.message)))
            .finally(()=> dispatch(setLoading(false)));
    };
};
