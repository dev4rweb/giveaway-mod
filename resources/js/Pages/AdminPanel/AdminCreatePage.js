import React, {useEffect, useState} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import ToggleBtn from "../../components/UI/ToggleBtn";
import {addGame} from "../../actions/games";
import CustomDatePicker from "../../components/UI/CustomDatePicker";
import AttachFilesBlock from "../../components/AttachFilesBlock";

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
                <div className={s.calendarBox}>
                    <CustomDatePicker
                        text={stateData.admin.createGive.start[stateData.lang]}
                        name={`startDate`}
                        val={game.startDate}
                        setGame={setGame}
                        game={game}
                    />
                    <CustomDatePicker
                        text={stateData.admin.createGive.end[stateData.lang]}
                        name={`endDate`}
                        val={game.endDate}
                        setGame={setGame}
                        game={game}
                    />
                </div>
            </div>

            <div className={s.titleBox}>
                <input
                    type="text"
                    className="custom-input"
                    name='name'
                    value={game.name}
                    onChange={event => setGame({
                        ...game,
                        ['name']: event.target.value
                    })}
                    placeholder={stateData.admin.createGive.name[stateData.lang]}
                />
            </div>

            <div className={s.description}>
                <textarea
                    name="description"
                    id=""
                    value={game.description}
                    onChange={event => setGame({
                        ...game,
                        ['description']: event.target.value
                    })}
                    className="custom-textarea"
                    placeholder={stateData.admin.createGive.desc[stateData.lang]}
                />
            </div>

            <AttachFilesBlock
                game={game}
                setGame={setGame}
            />
        </div>
    );
};

export default AdminCreatePage;
