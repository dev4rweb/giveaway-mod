import React, {useEffect, useState} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import ToggleBtn from "../../components/UI/ToggleBtn";
import {addGame} from "../../actions/games";

const AdminCreatePage = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const mainGame = useSelector(state => state.games.newGame)
    const [game, setGame] = useState(mainGame)

    useEffect(() => {
        console.log('game', game)
    }, []);

    return (
        <div className={`container ${s.createPage}`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.createGive.title[stateData.lang]}</p>
                <hr/>
            </div>
            <p className={s.taskP}>{stateData.admin.createGive.subTitle[stateData.lang]}</p>

            <div className={s.inputBox}>
                <div className={s.toggleBox}>
                    <ToggleBtn game={game} setGame={setGame}/>
                </div>
            </div>
        </div>
    );
};

export default AdminCreatePage;
