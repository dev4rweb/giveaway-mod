import React from 'react';
import s from '../../../sass/pages/AdminMainPage.module.scss'
import {useSelector} from "react-redux";

const AdminMainPage = ({users, games}) => {
    const stateData = useSelector(state => state.lang)
    return (
        <div className={`container ${s.adminMainPage}`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.mainTab[stateData.lang]}</p>
                <hr/>
            </div>

            <div
                className={`${s.item} ${s.green}`}
            >
                <p>
                    {stateData.admin.mainPage.register[stateData.lang]}
                </p>
                <span>
                    {users}
                </span>
            </div>

            <div
                className={`${s.item} ${s.orange}`}
            >
                <p>
                    {stateData.admin.mainPage.give[stateData.lang]}
                </p>
                <span>
                    {games}
                </span>
            </div>

            <div
                className={`${s.item} ${s.red}`}
            >
                <p>
                    {stateData.admin.mainPage.moder[stateData.lang]}
                </p>
                <span>
                    6
                </span>
            </div>
        </div>
    );
};

export default AdminMainPage;
