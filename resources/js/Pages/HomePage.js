import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/HomePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setUser} from "../reducers/userReducer";
import {getPosts} from "../actions/posts";
import ErrorMessage from "../components/UI/ErrorMessage";
import {setError} from "../reducers/errorReducer";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import dots from '../../assets/png/dots.png'
import Timer from "../components/Timer";
import SocialBlock from "../components/SocialBlock";
import Modal from "../components/Modal";
import CustomSelect from "../components/UI/CustomSelect";
import GameContainer from "../components/GameContainer";

/*https://youtu.be/tODggNhelQ4*/

const HomePage = ({user, errors}) => {
        const dispatch = useDispatch()
        const stateData = useSelector(state => state.lang)
        const isLoading = useSelector(state => state.error.isLoading)
        const error = useSelector(state => state.error.error)
        const isAuth = useSelector(state => state.user.isAuth)
        const currentUser = useSelector(state => state.user.user)
        const posts = useSelector(state => state.user.posts)
        const [modal, setModal] = useState(false)

        useEffect(() => {
            dispatch(setIsAuth(!!user))
            dispatch(setUser(user))
            dispatch(getPosts())
            console.log(posts)
        }, []);

        const handleIsLogged = () => {
            if (!isAuth) setModal(true)
        };

        if (isLoading) {
            return <Loader/>
        }

        if (error) {
            setTimeout(() => {
                dispatch(setError(''))
            }, 2000);
        }

        return (
            <Layout>
                <article className={`${s.homePage}`}>
                    <div className={s.layer}>
                        <img className={s.back} src={dots} alt="canvas"/>
                    </div>
                    <section className={`container ${s.content}`}>
                        <h2>{stateData.home.header[stateData.lang]}</h2>
                        <Timer/>
                        <SocialBlock/>
                        <button
                            className="btn btn-warning mt-3 mb-5"
                            onClick={handleIsLogged}
                        >
                            {stateData.home.get_key[stateData.lang]}
                        </button>
                    </section>
                    <GameContainer />
                </article>
                <Modal visible={modal} setVisible={setModal}>
                    <h4
                        className="mt-3"
                        style={{textAlign: 'center'}}
                    >
                        {stateData.modalIsLogged.please[stateData.lang]}
                        <a href="/login">
                            <strong>
                                {stateData.modalIsLogged.auth[stateData.lang]}
                            </strong>
                        </a>
                        {stateData.modalIsLogged.or[stateData.lang]}
                        <a href="/register">
                            <strong>
                                {stateData.modalIsLogged.register[stateData.lang]}
                            </strong>
                        </a>
                    </h4>
                </Modal>
                {/*<h1>Home Page</h1>
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
            {error && <ErrorMessage message={error} />}*/}
            </Layout>
        );
    }
;

export default HomePage;
