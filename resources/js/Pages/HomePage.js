import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setUser} from "../reducers/userReducer";
import {getPosts} from "../actions/posts";
import ErrorMessage from "../components/UI/ErrorMessage";
import {setError} from "../reducers/errorReducer";

/*https://youtu.be/tODggNhelQ4*/

const HomePage = ({user, errors}) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.error.isLoading)
    const error = useSelector(state => state.error.error)
    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.user)
    const posts = useSelector(state => state.user.posts)

    useEffect(() => {
        dispatch(setIsAuth(!!user))
        dispatch(setUser(user))
        dispatch(getPosts())
        console.log(posts)
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        setTimeout(() => {
            dispatch(setError(''))
        }, 2000);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <div>isAuth {isAuth ? 'Auth' : 'No logged'} </div>
            <div>username: {currentUser ? currentUser.name : 'Not Registered'}</div>
            <ul>
                {
                    posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )}
            </ul>
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default HomePage;
