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
import Modal from "../components/modals/Modal";
import CustomSelect from "../components/UI/CustomSelect";
import GameContainer from "../components/GameBox/GameContainer";
import {setFilterGames, setGames, setSponsorGames} from "../reducers/gameReducer";
import {setIsAuthModalOpen} from "../reducers/modalReducer";
import LogRegWelcome from "../components/modals/LogRegWelcome";
import ModalGameDescription from "../components/modals/ModalGameDescription";
import GameDescription from "../components/modals/GameDescription";
import ModalKey from "../components/modals/ModalKey";
import KeyFrame from "../components/modals/KeyFrame";
import ModalAuth from "../components/modals/ModalAuth";
import AuthPage from "./AuthPage";
import {fetchAllUsersTasksAction} from "../reducers/usersTasksReducer";
import {fetchAllUsersGamesAction} from "../reducers/userGameReducer";
import ModalVisitWebsite from "../components/modals/ModalVisitWebsite";
import CheckWebsiteDetails from "../components/modals/CheckWebsiteDetails";
import ModalTwitterViewPost from "../components/modals/ModalTwitterViewPost";
import TwitterViewPost from "../components/modals/TwitterViewPost";

/*https://youtu.be/tODggNhelQ4*/

const HomePage = ({user, errors, games, sponsorGames, userTasks, userGames}) => {
        const dispatch = useDispatch()
        const stateData = useSelector(state => state.lang)
        const isLoading = useSelector(state => state.error.isLoading)
        const error = useSelector(state => state.error.error)
        const isAuth = useSelector(state => state.user.isAuth)
        const currentUser = useSelector(state => state.user.user)
        // const posts = useSelector(state => state.user.posts)

        useEffect(() => {
            dispatch(setIsAuth(!!user))
            dispatch(setUser(user))
            // dispatch(getPosts())
            dispatch(setGames(games))
            dispatch(setSponsorGames(sponsorGames))
            dispatch(setFilterGames(games))
            if (userTasks)
                dispatch(fetchAllUsersTasksAction(userTasks))
            if (userGames)
                dispatch(fetchAllUsersGamesAction(userGames))
            // console.log(user)
        }, []);

        const handleIsLogged = (ev) => {
            // console.log('click')
            if (!isAuth) dispatch(setIsAuthModalOpen(true))
        };

        if (isLoading) {
            return <Loader/>
        }

        if (error) {
            setTimeout(() => {
                dispatch(setError(''))
            }, 5000);
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
                    <GameContainer/>
                </article>
                <Modal>
                    <LogRegWelcome/>
                </Modal>
                <ModalGameDescription>
                    <GameDescription/>
                </ModalGameDescription>
                <ModalKey>
                    <KeyFrame/>
                </ModalKey>
                <ModalAuth>
                    <AuthPage/>
                </ModalAuth>
                <ModalVisitWebsite>
                    <CheckWebsiteDetails />
                </ModalVisitWebsite>
                <ModalTwitterViewPost>
                    <TwitterViewPost />
                </ModalTwitterViewPost>
            </Layout>
        );
    }
;

export default HomePage;
