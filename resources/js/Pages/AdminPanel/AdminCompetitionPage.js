import React from 'react';
import s from '../../../sass/pages/AdminMainPage.module.scss'
import {useSelector} from "react-redux";
import AdminTableCompetitions from "../../components/tables/AdminTableCompetitions";
import CompetitionCard from "../../components/CompetitionCard";
import AdminEditPage from "./AdminEditPage";
import ModalDrawWinner from "../../components/modals/ModalDrawWinner";
import DrawWinner from "../../components/modals/DrawWinner";

const AdminCompetitionPage = ({games}) => {
    const stateData = useSelector(state => state.lang)
    const isEditPageOpen = useSelector(state => state.modal.editPage)
    const isModalDrawWinnerOpen = useSelector(state => state.modal.modalDrawWinner)
    console.log('AdminCompetitionPage', games)

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
            {
                isEditPageOpen && <AdminEditPage />
            }
            {
                isModalDrawWinnerOpen &&
                <ModalDrawWinner>
                    <DrawWinner/>
                </ModalDrawWinner>
            }
        </div>
    );
};

export default AdminCompetitionPage;
