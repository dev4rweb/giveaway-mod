import React, {useEffect} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setEditPage} from "../../reducers/modalReducer";
import ToggleBtn from "../../components/UI/ToggleBtn";
import CustomDatePicker from "../../components/UI/CustomDatePicker";
import AttachFilesBlock from "../../components/AttachFilesBlock";
import {updateGame} from "../../actions/games";
import GiftBlock from "../../components/GiftBlock/GiftBlock";
import TaskContainer from "../../components/Tasks/TaskContainer";
import {fetchAllGifts} from "../../reducers/giftReducer";
import {editGame} from "../../reducers/gameReducer";
import {
    setInitialSelectedTaskOne, setInitialSelectedTaskThree, setInitialSelectedTaskTwo,
    setTaskOneFromServer, setTaskThreeFromServer, setTaskTwoFromServer,
    updateTasksForGameAction, updateTasksForGameThreeAction, updateTasksForGameTwoAction
} from "../../reducers/TaskReducer";
import {cleanTempState, compareTasks} from "../../actions/tasks";

const AdminEditPage = () => {
    const dispatch = useDispatch()
    const game = useSelector(state => state.games.editGame)
    const stateData = useSelector(state => state.lang)
    const gifts = useSelector(state => state.gifts.gifts)

    const taskOneFromServer = useSelector(state => state.tasks.taskOneFromServer)
    const selectedTaskOne = useSelector(state => state.tasks.selectedTaskOne)

    const taskTwoFromServer = useSelector(state => state.tasks.taskTwoFromServer)
    const selectedTaskTwo = useSelector(state => state.tasks.selectedTaskTwo)

    const taskThreeFromServer = useSelector(state => state.tasks.taskThreeFromServer)
    const selectedTaskThree = useSelector(state => state.tasks.selectedTaskThree)
    const tasks = game.tasks

    useEffect(() => {
        if (gifts.length === 0) {
            dispatch(fetchAllGifts(game.gifts));
        }
        // console.log('AdminEditPage', gifts)
    });

    useEffect(() => {
        // console.log('AdminEditPage', tasks)
        if (tasks.length > 0)
            for (let i = 0; i < tasks.length; i++) {
                if (i === 0) {
                    // console.log('AdminEditPage 0 ', tasks[i])
                    dispatch(setTaskOneFromServer(tasks[i]))
                    dispatch(updateTasksForGameAction(tasks[i]))
                    dispatch(setInitialSelectedTaskOne(tasks[i]))
                }
                if (i === 1) {
                    // console.log('AdminEditPage 1 ', tasks[i])
                    dispatch(setTaskTwoFromServer(tasks[i]))
                    dispatch(updateTasksForGameTwoAction(tasks[i]))
                    dispatch(setInitialSelectedTaskTwo(tasks[i]))
                }
                if (i === 2) {
                    // console.log('AdminEditPage 2 ', tasks[i])
                    dispatch(setTaskThreeFromServer(tasks[i]))
                    dispatch(updateTasksForGameThreeAction(tasks[i]))
                    dispatch(setInitialSelectedTaskThree(tasks[i]))
                }
            }
    }, []);

    const setGame = (game) => {
        dispatch(editGame(game))
    };

    const submitHandler = async e => {
        dispatch(updateGame(game))
        await dispatch(compareTasks(taskOneFromServer, selectedTaskOne))
        await dispatch(compareTasks(taskTwoFromServer, selectedTaskTwo))
        await dispatch(compareTasks(taskThreeFromServer, selectedTaskThree))
        await dispatch(cleanTempState())
        await dispatch(setEditPage(false))
        window.location.reload()
    };

    const closeHandler = e => {
        dispatch(setEditPage(false))
        dispatch(cleanTempState())
        // window.location.reload()
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
                game.isCompetition && <TaskContainer />
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
