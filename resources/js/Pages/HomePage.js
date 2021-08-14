import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setUser} from "../reducers/userReducer";

/*https://youtu.be/tODggNhelQ4*/

const HomePage = ({user, errors}) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(setIsAuth(!!user))
        dispatch(setUser(user))
        console.log(user)
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            <div>isAuth {isAuth ? 'Auth' : 'No logged'} </div>
            <div>username: {currentUser ? currentUser.name : 'Not Registered'}</div>
        </div>
    );
};

export default HomePage;
