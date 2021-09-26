import React from 'react';
import s from '../../../../sass/components/GameCard/GameCard.module.scss'
import fullStar from '../../../../assets/icons/full-star.png';
import halfStar from '../../../../assets/icons/star.png';
import steam from '../../../../assets/icons/steam.png'
import {useDispatch, useSelector} from "react-redux";
import {setGameDescription, setIsAuthModalOpen, setModalGameDescription} from "../../../reducers/modalReducer";
import {createUserGame, updateUserGame} from "../../../actions/userGame";

const GameCard = ({item}) => {
    const stateData = useSelector(state => state.lang)
    const star = item.isFavorite == 1 ? fullStar : halfStar;
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const userGames = useSelector(state => state.userGame.usersGames)
    const user = useSelector(state => state.user.user)
    const btnText = item && item.isCompetition ?
        stateData.home.show_info[stateData.lang] :
        stateData.home.join_giveaway[stateData.lang]

    /*const addPoints = (points) => {
        console.log('addPoints', points)
        if (userGames) {
            const userGameUsed = userGames.find(i => i.game_id == item.id);

            if (userGameUsed) {
                // console.log('update UserGame');
                const userGame = {
                    id: userGameUsed.id,
                    user_id: user.id,
                    game_id: item.id,
                    points: userGameUsed.points + 1
                }
                console.log('do nothing', userGameUsed)
                dispatch(updateUserGame(userGame))
            } else {
                const userGame = {
                    user_id: user.id,
                    game_id: item.id,
                    points: points
                };
                console.log('create user game 1')
                dispatch(createUserGame(userGame))
            }
        } else {
            console.log('create user game')
            const userGame = {
                user_id: user.id,
                game_id: item.id,
                points: points
            };
            dispatch(createUserGame(userGame))
        }
    };*/

    const handleClick = (e) => {
        console.log('handleClick', item)
        if (isAuth) {
            dispatch(setModalGameDescription(true))
            dispatch(setGameDescription(item))
            /*if (item && item.isCompetition)
                addPoints(1)*/
        } else
            dispatch(setIsAuthModalOpen(true))
    };

    return (
        <div className={s.card} style={{backgroundImage: `url(${item.mainImage})`}}>
            <div className={s.starBox}><span><img src={star} alt="favorite"/></span></div>
            <div className={s.content}>
                <h3>{item.name}</h3>
                {
                    item.isCompetition ?
                        <div className={s.steamBox}>
                            {
                                item.tasks && item.tasks.map((item, index) => <a key={index} href="#"><img src={steam}
                                                                                                           alt="steam"/></a>)
                            }
                        </div>
                        : <div/>
                }

                <div className={s.btnBox}>
                    <button
                        className="btn btn-warning"
                        onClick={event => handleClick(event)}
                    >
                        {btnText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
