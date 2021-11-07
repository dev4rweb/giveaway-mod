import React from 'react';
import '../../../sass/pages/userPage.scss'
import {useSelector} from "react-redux";
import UserTable from "../../components/UserTable";

const UserMainPage = () => {
    const stateData = useSelector(state => state.lang)
    const games = useSelector(state => state.userPage.games)
    const user = useSelector(state => state.userPage.user)
    const participation = games.length
    const wins = games.filter(item => item.winner_id == user.id).length || 0
    const pending = games.filter(item => item.status == 0).length

    return (
        <div className={`container user-page`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.mainTab[stateData.lang]} points - {user.votes}</p>
                <hr/>
            </div>

            <div className="user-statistic">
                <div className="user-stat-item stat-orange">
                    <p>{stateData.user.part[stateData.lang]} </p>
                    <span>{participation}</span>
                </div>
                <div className="user-stat-item stat-green">
                    <p>{stateData.user.wins[stateData.lang]} </p>
                    <span>{wins}</span>
                </div>
                <div className="user-stat-item stat-blue">
                    <p>{stateData.user.pend[stateData.lang]} </p>
                    <span>{pending}</span>
                </div>
            </div>

            <div>
                {
                    games.length > 0 ?
                        <UserTable games={games} user={user}/>
                        :
                        <h3>Take part!</h3>
                }
            </div>
        </div>
    );
};

export default UserMainPage;
