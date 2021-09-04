import React from 'react';
import s from '../../../sass/components/GameDescription.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {CopyToClipboard} from "react-copy-to-clipboard/src/Component";
import {TelegramShareButton} from "react-share";
import steam from '../../../assets/png/steam-icon-white.png'
import share from '../../../assets/icons/share.png'
import {setError} from "../../reducers/errorReducer";
import {createUserGame} from "../../actions/userGame";
import {getGames} from "../../actions/games";
import ErrorMessage from "../UI/ErrorMessage";
import {setGameDescription, setModalGameDescription} from "../../reducers/modalReducer";
import {updateUser} from "../../actions/users";

const GameDescription = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const error = useSelector(state => state.error.error)
    const item = useSelector(state => state.modal.gameDescription)
    const allGames = useSelector(state => state.games.games)
    const user = useSelector(state => state.user.user)
    const btnText = item && item.isCompetition ?
        stateData.home.get_key[stateData.lang] :
        stateData.home.join_giveaway[stateData.lang]

    // console.log('GameDescription', user)

    const handleClick = async e => {
        const game = allGames.find(i => i.id === item.id)
        if (game) {
            // console.log('GameDescription', game)
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
            }
            setTimeout(() => {
                dispatch(setModalGameDescription(false))
                dispatch(setGameDescription(null))
            }, 2000);
        } else {
            // console.log('click', game);
            // console.log('isJoined', isJoined)
        }
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
                                                        <CopyToClipboard text={i.url}>
                                                            <button
                                                                className={s.clipboard}>{stateData.home.copy[stateData.lang]}</button>
                                                        </CopyToClipboard>
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
                        onClick={handleClick}
                    >
                        {btnText}
                    </button>
                </div>
                {
                    error && <ErrorMessage message={error} />
                }
            </div>
        );

    return (
        <div>No Item</div>
    )
};

export default GameDescription;
