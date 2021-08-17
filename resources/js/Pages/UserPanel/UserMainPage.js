import React from 'react';
import '../../../sass/pages/userPage.scss'
import {useSelector} from "react-redux";
import UserTable from "../../components/UserTable";

const UserMainPage = () => {
    const stateData = useSelector(state => state.lang)
    return (
        <div className={`container user-page`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.mainTab[stateData.lang]}</p>
                <hr/>
            </div>

            <div className="user-statistic">
                <div className="user-stat-item stat-orange">
                    <p>{stateData.user.part[stateData.lang]} </p>
                    <span>788</span>
                </div>
                <div className="user-stat-item stat-green">
                    <p>{stateData.user.wins[stateData.lang]} </p>
                    <span>50</span>
                </div>
                <div className="user-stat-item stat-blue">
                    <p>{stateData.user.pend[stateData.lang]} </p>
                    <span>2</span>
                </div>
            </div>

            <div>
                <UserTable/>
            </div>
        </div>
    );
};

export default UserMainPage;
