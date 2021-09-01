import React, {useEffect} from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";
import UserLayout from "../components/UserLayout";
import s from '../../sass/pages/AdminPage.module.scss'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import steam from "../../assets/png/steam-icon-white.png";
import logout from "../../assets/icons/logout-blue.png";
import {useDispatch, useSelector} from "react-redux";
import UserMainPage from "./UserPanel/UserMainPage";
import {setUserPageGamesAction, setUserPageUserAction} from "../reducers/userPageReducer";

const UserPage = ({user, games}) => {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state.lang)

    useEffect(() => {
        dispatch(setUserPageUserAction(user))
        dispatch(setUserPageGamesAction(games))
    }, []);

    return (
        <UserLayout>
            <Tabs className={`container admin-page ${s.adminPage}`}>

                <TabList className={s.navigation}>
                    <Tab className={s.item}>{stateData.admin.mainTab[stateData.lang]}</Tab>
                    <div className={s.btnWrapper}>
                        <div className='outline-radius'>
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
                                {user.name}
                                <img src={logout} alt="icon"/>
                            </InertiaLink>
                        </div>
                    </div>
                </TabList>

                <TabPanel>
                    <UserMainPage />
                </TabPanel>
            </Tabs>
        </UserLayout>
    );
};

export default UserPage;
