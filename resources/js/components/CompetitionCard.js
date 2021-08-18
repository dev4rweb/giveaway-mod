import React from 'react';
import '../../sass/components/CompetitionCard.scss'
import {useSelector} from "react-redux";

const CompetitionCard = () => {
    const stateData = useSelector(state => state.lang)
    return (
        <div className="competitionCard">
            <p className="title">
                {stateData.admin.compPage.compCard.comp[stateData.lang]} #77
            </p>

            <div className="double">
                <p className="name">
                    {stateData.admin.compPage.compCard.win[stateData.lang]}
                </p>
                <p className="value">
                    id7978
                </p>
            </div>

            <div className="double">
                <p className="name">
                    {stateData.admin.compPage.compCard.cond[stateData.lang]}
                </p>
                <p className="value">
                    Steam, facebook
                </p>
            </div>

            <div className="double">
                <p className="name">
                    {stateData.admin.compPage.compCard.prize[stateData.lang]}
                </p>
                <p className="value">
                    Portal 2 key steam
                </p>
            </div>

            <div className="double">
                <p className="name">
                    {stateData.admin.compPage.compCard.status[stateData.lang]}
                </p>
                <p className="value">
                    {stateData.admin.compPage.compCard.rec[stateData.lang]}
                </p>
            </div>
        </div>
    );
};

export default CompetitionCard;
