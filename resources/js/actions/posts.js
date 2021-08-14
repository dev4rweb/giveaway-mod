import axios from "axios";
import {setPosts} from '../reducers/userReducer'
import {setError, setLoading} from "../reducers/errorReducer";

export const getPosts = () => {
    return async (dispatch) => {
        dispatch(setLoading(true))
        await axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                // console.log(res.data)
                dispatch(setPosts(res.data))
            })
            .catch(err => {
                console.log(err.response.status)
                dispatch(setError(err.response.status))
            })
            .finally(() => {
                dispatch(setLoading(false))
            });
    };
};
