import React, {useEffect, useState} from 'react';
import s from '../../../sass/components/GameDescription.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {CopyToClipboard} from "react-copy-to-clipboard/src/Component";
import {TelegramShareButton} from "react-share";
import steam from '../../../assets/png/steam-icon-white.png'
import share from '../../../assets/icons/share.png'
import {setError} from "../../reducers/errorReducer";
import {createUserGame, updateUserGame} from "../../actions/userGame";
import {getGames} from "../../actions/games";
import ErrorMessage from "../UI/ErrorMessage";
import {
    checkWebsiteClickAction,
    setGameDescription,
    setModalGameDescription,
    setVisitWebsiteDetailsAction
} from "../../reducers/modalReducer";
import {updateUser} from "../../actions/users";
import SwitchGameDescBtn from "../UI/SwitchGameDescBtn";
import {createUserTask, getAllUsersTasks, removeUserTask, updateUserTask} from "../../actions/userTask";

const GameDescription = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const error = useSelector(state => state.error.error)
    const item = useSelector(state => state.modal.gameDescription)
    const allGames = useSelector(state => state.games.games)
    const user = useSelector(state => state.user.user)
    const userTasks = useSelector(state => state.usersTasks.usersTasks)
    const userGames = useSelector(state => state.userGame.usersGames)
    const remoteTask = useSelector(state => state.modal.checkWebsiteDetails)
    const remoteCheckWebsiteClick = useSelector(state => state.modal.checkWebsiteClick)
    const [isBtnDisabled, setBtnDisabled] = useState(false)
    const btnText = item && item.isCompetition ?
        stateData.home.join_competition[stateData.lang] :
        stateData.home.join_giveaway[stateData.lang]

    // console.log('GameDescription', userTasks)
    // console.log('GameDescription item', item)

    const testUserTaskApi = (task) => {
        // create
        /*const userTask = {
            user_id: user.id,
            task_id: task.id,
            is_done: 0
        }*/
        // dispatch(createUserTask(userTask)) // working

        // update
        /*const userTask = {
            id: 1,
            user_id: user.id,
            task_id: task.id,
            is_done: 0
        }
        dispatch(updateUserTask(userTask))*/ // working

        // remove
        // dispatch(removeUserTask(1)) // working

        // get all
        // dispatch(getAllUsersTasks()) // working
    }

    const compareDoneList = () => {
        // console.log('compareDoneList')
        const doneList = []
        item.tasks.map(item => {
            const doneTask = userTasks.find(i => i.task_id == item.id)
            // console.log('compareDoneList',doneTask)
            if (doneTask && doneTask.is_done == 1)
                doneList.push(doneTask)
        });
        // console.log('compareDoneList doneList.length', doneList.length)
        // console.log('compareDoneList item.tasks.length', item.tasks.length)
        if (doneList.length === item.tasks.length)
            setBtnDisabled(false)
    }

    useEffect(() => {
        // console.log('useEffect', item)
        if (item && item.isCompetition == 1) setBtnDisabled(true)
        else setBtnDisabled(false)
        if (userTasks && item && item.isCompetition == 1)
            compareDoneList()
    }, [item]);

    useEffect(() => {
        if (remoteCheckWebsiteClick && remoteTask) {
            // console.log('use Effect ', remoteTask);
            visitWebsite(remoteTask).then(r => {
                dispatch(setVisitWebsiteDetailsAction(null))
                dispatch(checkWebsiteClickAction(false))
                // document.location.reload()
            });
        }
    }, [remoteCheckWebsiteClick]);

    const getKeyHandlerForCompetition = game => {
        // console.log('getKeyHandlerForCompetition', game)
        // console.log('getKeyHandlerForCompetition userGames', userGames)
        // console.log('getKeyHandlerForCompetition userTasks', userTasks)
        const userGame = userGames.find(i => i.game_id == game.id)
        // console.log('getKeyHandlerForCompetition', userGame)
        if (userGame.points >= game.tasks.length + 1) dispatch(setError('You are already joined'))
        else addPoints(1)
    };

    const getKeyHandlerForGiveaway = async game => {
        // console.log('getKeyHandlerForGiveaway', game)
        const isJoined = !!game.users.find(i => i.id === user.id);
        // console.log('isJoined', isJoined)
        if (isJoined) dispatch(setError('You are already joined'));
        else {
            const userGame = {
                user_id: user.id,
                game_id: item.id
            }
            await dispatch(createUserGame(userGame))
            let updateVotesUser = user
            updateVotesUser.votes = updateVotesUser.votes + 1
            await dispatch(updateUser(updateVotesUser))
            await dispatch(getGames())
            addPoints(1)
        }
    };

    const handleClick = async () => {
        const game = allGames.find(i => i.id === item.id)
        if (game) {
            // console.log('GameDescription', game)
            if (game.isCompetition == 1) getKeyHandlerForCompetition(game)
            else await getKeyHandlerForGiveaway(game)

            setTimeout(() => {
                dispatch(setModalGameDescription(false))
                dispatch(setGameDescription(null))
            }, 2000);
        } else {
            // console.log('click', game);
            // console.log('isJoined', isJoined)
        }
    };

    const addPoints = points => {
        if (userGames) {
            const userGameUsed = userGames.find(i => i.game_id == item.id);
            console.log(userGameUsed)
            if (userGameUsed) {
                // console.log('update UserGame');
                const userGame = {
                    id: userGameUsed.id,
                    user_id: user.id,
                    game_id: item.id,
                    points: parseInt(userGameUsed.points) + 1
                }
                dispatch(updateUserGame(userGame))
            } else {
                const userGame = {
                    user_id: user.id,
                    game_id: item.id,
                    points: points
                };
                dispatch(createUserGame(userGame))
            }
        } else {
            const userGame = {
                user_id: user.id,
                game_id: item.id,
                points: points
            };
            dispatch(createUserGame(userGame))
        }
    };

    const visitWebsite = async (task) => {
        // console.log('visitWebsite', task)
        const userTask = {
            user_id: user.id,
            task_id: task.id,
            is_done: 1
        }
        dispatch(createUserTask(userTask))
        await addPoints(1)
        // testUserTaskApi(task)
        dispatch(getAllUsersTasks())
        window.open(task.url, "_blank")
    };

    if (item)
        return (
            <div className={s.gameDesc}>
                <p>{item.name}</p>
                <div className={s.imageBox}>
                    {item.leftImage && <img className={s.left} src={item.leftImage} alt=""/>}
                    {item.rightImage && <img className={s.right} src={item.rightImage} alt=""/>}
                    {item.secondaryImage && <img className={s.center} src={item.secondaryImage} alt=""/>}
                </div>


                {item.description && <p className={s.content}>{item.description}</p>}
                {
                    item.isCompetition == 1 ?
                        <p className={s.content}
                           style={{textAlign: 'left', marginBottom: '10px', paddingLeft: '15px'}}>
                            {stateData.home.task[stateData.lang]}
                        </p>
                        : <p/>
                }

                {
                    item.isCompetition == 1 ?
                        <div className={s.links}>
                            <Tabs>
                                <TabList className={s.tasks}>
                                    {
                                        item.tasks && item.tasks.map((item, index) => <Tab key={index}><img src={steam}
                                                                                                            alt="steam"/></Tab>)
                                    }
                                </TabList>
                                <div>
                                    {
                                        item.tasks && item.tasks.map((i, index) => {
                                            return (
                                                <TabPanel key={index}>
                                                    <div className={s.subscribe}>
                                                        <p>
                                                            <span>
                                                                {i.task}
                                                            </span>
                                                            {/*{item.taskOne}*/}
                                                            {i.url}
                                                        </p>
                                                        <SwitchGameDescBtn
                                                            task={i}
                                                            userTasks={userTasks}
                                                        />
                                                    </div>
                                                </TabPanel>
                                            )
                                        })
                                    }
                                </div>
                            </Tabs>
                        </div>
                        :
                        <div/>
                }

                <div className={s.btnWrapper}>
                    <TelegramShareButton
                        // url={item.link}
                        url="/"
                        className={s.share}
                        title={`Get the key`}>
                        <img src={share} alt="share"/>
                    </TelegramShareButton>
                    {/*<a href="#" className={s.share}><img src={share} alt="share"/></a>*/}
                    <button
                        className="btn btn-warning"
                        disabled={isBtnDisabled}
                        onClick={handleClick}
                    >
                        {btnText}
                    </button>
                </div>
                {
                    error && <ErrorMessage message={error}/>
                }
            </div>
        );

    return (
        <div>No Item</div>
    )
};

export default GameDescription;
