import React, {useEffect, useRef, useState} from 'react';
import s from '../../sass/pages/AdminPage.module.scss'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import AdminLayout from "../components/AdminLayout";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../reducers/translateReducer";
import {InertiaLink} from "@inertiajs/inertia-react";
import steam from '../../assets/png/steam-icon-white.png'
import logout from '../../assets/icons/logout-blue.png'
import management from '../../assets/icons/management.svg'
import managementOrange from '../../assets/icons/management-hover.svg'
import trophy from '../../assets/icons/trophy.svg'
import trophyOrange from '../../assets/icons/trophy-hover.svg'
import profile from '../../assets/icons/user.svg'
import profileOrange from '../../assets/icons/user-hover.svg'
import AdminMainPage from "./AdminPanel/AdminMainPage";
import AdminUsersPage from "./AdminPanel/AdminUsersPage";
import Loader from "../components/Loader";
import {setError} from "../reducers/errorReducer";
import {setGames} from "../reducers/gameReducer";
import {setAllUsers} from "../reducers/userReducer";
import ErrorMessage from "../components/UI/ErrorMessage";
import AdminCompetitionPage from "./AdminPanel/AdminCompetitionPage";
import AdminCreatePage from "./AdminPanel/AdminCreatePage";
import {addGame} from "../actions/games";
import {createGift, getGifts} from "../actions/gifts";
import {createWinner, getAllWinners, removeWinner} from "../actions/winners";

const AdminPage = ({currentUser, allUsers, allGames}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const isLoading = useSelector(state => state.error.isLoading)
    const error = useSelector(state => state.error.error)
    const users = useSelector(state => state.user.users)
    const games = useSelector(state => state.games.games)
    const language = localStorage.getItem('lang') ?? "en"
    if (!stateData) {
        dispatch(setLang(language))
    }
    let hidTab = useRef(null);

    const [tabIndex, setTabIndex] = useState(0);

    function hiddenTabHandler(event) {
        // console.log('hiddenTabHandler');
        dispatch(addGame())
        hidTab.current.click();
    }

    // console.log('allGames', allUsers)
    const testApi = () => {
        // const time = (Math.ceil(new Date(Date.now()).getTime()/1000))
        // dispatch(getGames())
        // dispatch(addGame())
        /*let game = {
            id: 36,
            name: 'Updated Name',
            startDate: time + 50000,
            endDate: time - 20000,
            mainImage: '/images/bg-main.png',
            description: 'Some text'
        }
        dispatch(updateGame(game))*/
        // dispatch(removeGame(36))

        // dispatch(getAllWinners())
        /*const winner = { // !!!only for user that contain game in userGame table
            user_id: 5,
            game_id: 8
        }
        dispatch(createWinner(winner))*/

        // dispatch(removeWinner(156))
    }

    useEffect(() => {
        dispatch(setGames(allGames))
        dispatch(setAllUsers(allUsers))
        testApi()
    }, []);


    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        setTimeout(() => {
            dispatch(setError(''))
        }, 3000);
    }

    return (
        <AdminLayout
            hiddenTabHandler={hiddenTabHandler}
        >
            <Tabs
                className={`container admin-page ${s.adminPage}`}
                selectedIndex={tabIndex}
                onSelect={index => setTabIndex(index)}
            >
                <TabList className={s.navigation}>
                    <Tab className={s.item}>
                        {
                            tabIndex === 0 ?
                                <img src={managementOrange} width="23px" alt=""/> :
                                <img src={management} width="23px" alt=""/>
                        }
                        {stateData.admin.mainTab[stateData.lang]}
                    </Tab>
                    <Tab
                        className={s.item}>
                        {
                            tabIndex === 1 ?
                                <img src={trophyOrange} width="24px" alt=""/> :
                                <img src={trophy} width="24px" alt=""/>
                        }
                        {stateData.admin.competitionTab[stateData.lang]}
                    </Tab>
                    <Tab
                        className={s.item}>
                        {
                            tabIndex === 2 ?
                                <img src={profileOrange} width="18px" alt=""/> :
                                <img src={profile} width="18px" alt=""/>
                        }
                        {stateData.admin.usersTab[stateData.lang]}
                    </Tab>
                    <Tab
                        style={{display: 'none'}}
                    >
                        <p ref={hidTab}>Create</p>
                    </Tab>
                    <div className={s.btnWrapper}>
                        <div className='outline-radius'
                        >
                            <InertiaLink
                                href="/logout"
                                method="post"
                                as="button"
                                type="button"
                                className="btn btn-success w-100 btn-logout"
                            >
                            <span>
                                <img src={steam} alt="icon"/>
                            </span>
                                {currentUser.name}
                                <img src={logout} alt="icon"/>
                            </InertiaLink>
                        </div>
                    </div>
                </TabList>

                <TabPanel>
                    <AdminMainPage
                        users={users}
                        games={games}
                    />
                </TabPanel>
                <TabPanel>
                    <AdminCompetitionPage
                        games={games}
                    />
                </TabPanel>
                <TabPanel>
                    <AdminUsersPage users={users}/>
                </TabPanel>
                <TabPanel>
                    <AdminCreatePage/>
                </TabPanel>
            </Tabs>
            {error && <ErrorMessage message={error}/>}
        </AdminLayout>
    );
};

export default AdminPage;
