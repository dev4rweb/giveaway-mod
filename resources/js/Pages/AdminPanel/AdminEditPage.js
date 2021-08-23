import React, {useEffect, useState} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setEditPage} from "../../reducers/modalReducer";
import ToggleBtn from "../../components/UI/ToggleBtn";
import CustomDatePicker from "../../components/UI/CustomDatePicker";
import AttachFilesBlock from "../../components/AttachFilesBlock";
import {updateGame} from "../../actions/games";
import GiftBlock from "../../components/GiftBlock/GiftBlock";
import TaskContainer from "../../components/Tasks/TaskContainer";
import {setTaskOne, setTaskThree, setTaskTwo} from "../../reducers/taskTypeReducer";
import {fetchAllGifts} from "../../reducers/giftReducer";
import {editGame} from "../../reducers/gameReducer";

const AdminEditPage = () => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.games.editGame)
    const stateData = useSelector(state => state.lang)
    const gifts = useSelector(state => state.gifts.gifts)

    useEffect(() => {
        if (gifts.length === 0) {
            dispatch(fetchAllGifts(game.gifts));
        }
        console.log('AdminEditPage',gifts)
    });

    const setGame = (game) => {
        dispatch(editGame(game))
    };

    const submitHandler = e => {
        dispatch(updateGame(game))
        dispatch(setEditPage(false))
        dispatch(fetchAllGifts([]))
        window.location.reload()
    };

    const closeHandler = e => {
        dispatch(setEditPage(false))
        dispatch(setTaskOne(null))
        dispatch(setTaskTwo(null))
        dispatch(setTaskThree(null))
        dispatch(fetchAllGifts([]))
        window.location.reload()
    };

    return (
        <div
            className={`container ${s.createPage} ${s.editPage}`}
        >
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

            <div className={s.giftBox}>
                <GiftBlock gameId={game.id} gifts={gifts}/>
            </div>

            {
                game.isCompetition && <TaskContainer tasks={game.tasks}/>
            }

            <div className={s.btnWrapper}>
                <button
                    className="btn btn-warning w-100 mt-3"
                    onClick={submitHandler}
                >
                    {stateData.admin.createGive.btnUpdate[stateData.lang]}
                </button>
                <button
                    className="btn btn-warning w-100 mt-3"
                    onClick={closeHandler}
                >
                    {stateData.admin.createGive.btnReturn[stateData.lang]}
                </button>
            </div>
        </div>
    );
};

export default AdminEditPage;
