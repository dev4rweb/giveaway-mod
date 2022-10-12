import React from 'react';
import s from '../../../sass/pages/AdminPage.module.scss'
import management from '../../../assets/icons/management.svg'
import managementOrange from '../../../assets/icons/management-hover.svg'
import trophy from '../../../assets/icons/trophy.svg'
import trophyOrange from '../../../assets/icons/trophy-hover.svg'
import profile from '../../../assets/icons/user.svg'
import profileOrange from '../../../assets/icons/user-hover.svg'
import {InertiaLink} from "@inertiajs/inertia-react";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../reducers/translateReducer";

const AdminSideBar = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const language = localStorage.getItem('lang') ?? "en"
    if (!stateData) {
        dispatch(setLang(language))
    }
    const sidebarData = [
        {id: 1, url: '/admin-panel', icon: management, activeIcon: managementOrange, name: stateData.admin.mainTab[stateData.lang]},
        {id: 2, url: '/admin-competitions', icon: trophy, activeIcon: trophyOrange, name: stateData.admin.competitionTab[stateData.lang]},
        {id: 3, url: '/admin-users', icon: profile, activeIcon: profileOrange, name: stateData.admin.usersTab[stateData.lang]},
        {id: 4, url: '/admin-category', icon: management, activeIcon: managementOrange, name: stateData.admin.categoryTabs[stateData.lang]},
    ]

    const isActiveItem = url => {
        return !!window.location.href.includes(url);

    };

    return (
        <div className={`container admin-page ${s.adminPage}`}>
            <ul className={s.navigation}>
                {
                    sidebarData.map(item =>
                        <li
                            className={`${s.item} ${isActiveItem(item.url) && s.active}`}
                            key={item.id}
                        >
                            <InertiaLink
                                href={item.url}
                                style={{color: isActiveItem(item.url) ? '#fbb527' : '#fdfdfd'}}
                                className={`${s.item} ${isActiveItem(item.url) && s.active}`}
                            >
                                {
                                    isActiveItem(item.url) ?
                                        <img src={item.activeIcon} width="23px" alt=""/>
                                        :
                                        <img src={item.icon} width="23px" alt=""/>
                                }
                                {item.name}
                            </InertiaLink>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default AdminSideBar;
