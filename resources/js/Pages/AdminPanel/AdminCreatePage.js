import React, {useEffect} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import ToggleBtn from "../../components/UI/ToggleBtn";
import {updateGame} from "../../actions/games";
import CustomDatePicker from "../../components/UI/CustomDatePicker";
import AttachFilesBlock from "../../components/AttachFilesBlock";
import {changeNewGame} from "../../reducers/gameReducer";
import GiftBlock from "../../components/GiftBlock/GiftBlock";
import TaskContainer from "../../components/Tasks/TaskContainer";
import {
    setTasksForGameAction,
    setTasksForGameThreeAction,
    setTasksForGameTwoAction,
} from "../../reducers/TaskReducer";
import {cleanTempState, compareTasks} from "../../actions/tasks";

const AdminCreatePage = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const game = useSelector(state => state.games.newGame)
    const setGame = game => {
        dispatch(changeNewGame(game))
    };


    const gifts = useSelector(state => state.gifts.gifts)

    const taskOneFromServer = useSelector(state => state.tasks.taskOneFromServer)
    const selectedTaskOne = useSelector(state => state.tasks.selectedTaskOne)

    const taskTwoFromServer = useSelector(state => state.tasks.taskTwoFromServer)
    const selectedTaskTwo = useSelector(state => state.tasks.selectedTaskTwo)

    const taskThreeFromServer = useSelector(state => state.tasks.taskThreeFromServer)
    const selectedTaskThree = useSelector(state => state.tasks.selectedTaskThree)


    useEffect(() => {
        if (game.status == 2) {
            const tempGame = game
            tempGame.status = 0
            dispatch(changeNewGame(tempGame));
        }
        dispatch(setTasksForGameAction(game))
        dispatch(setTasksForGameTwoAction(game))
        dispatch(setTasksForGameThreeAction(game))
        // console.log('game', game)
    }, []);

    const submitHandler = async e => {
        // console.log('submitHandler', game)
        await dispatch(updateGame(game))
        await dispatch(changeNewGame({}))
        await dispatch(compareTasks(taskOneFromServer, selectedTaskOne))
        await dispatch(compareTasks(taskTwoFromServer, selectedTaskTwo))
        await dispatch(compareTasks(taskThreeFromServer, selectedTaskThree))
        await dispatch(cleanTempState())
        window.location.reload()
    };

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

            <div className={s.giftBox}>
                {game && <GiftBlock gameId={game.id} gifts={gifts}/>}
            </div>

            {
                game.isCompetition && game.isCompetition != 0
                    ? <TaskContainer /> : <div/>
            }

            <div className={s.btnWrapper}>
                <button
                    className="btn btn-warning w-100 mt-3"
                    onClick={submitHandler}
                >
                    {stateData.admin.createGive.btnCreate[stateData.lang]}
                </button>
            </div>
        </div>
    );
};

export default AdminCreatePage;
