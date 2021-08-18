import React from 'react';
import s from '../../../sass/pages/AdminMainPage.module.scss'
import {useSelector} from "react-redux";
import AdminTableCompetitions from "../../components/tables/AdminTableCompetitions";
import CompetitionCard from "../../components/CompetitionCard";

const AdminCompetitionPage = ({games}) => {
    const stateData = useSelector(state => state.lang)

    return (
        <div className={`container ${s.adminMainPage}`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.competitionTab[stateData.lang]}</p>
                <hr/>
            </div>

            <div
                className={`${s.item} ${s.orange}`}
            >
                <p>
                    {stateData.admin.compPage.give[stateData.lang]}
                </p>
                <span>
                    {games.length}
                </span>
            </div>

            {
                games && games.length > 0
                    ?
                    <AdminTableCompetitions/>
                    :
                    <h1>No any Game</h1>
            }


            <div className={s.cardWrapper}>
                <CompetitionCard/>
                <CompetitionCard/>
            </div>
        </div>
    );
};

export default AdminCompetitionPage;
