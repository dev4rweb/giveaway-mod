import React from 'react';
import s from '../../../sass/components/GameBox.module.scss'
import GameCard from "./GameCard/GameCard";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthModalOpen, setModalKey} from "../../reducers/modalReducer";

const GameBox = ({games, sponsorGames}) => {
    const stateData = useSelector(state => state.lang)
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const minHeight = sponsorGames && sponsorGames.length ?
        '440px' : ''
    const isSponsorGame = sponsorGames && sponsorGames.length ?
        '230px' : '32px'

    const takeKeyHandler = (ev) => {
        // console.log('takeKeyHandler')
        if (isAuth) {
            dispatch(setModalKey(true))
        } else
            dispatch(setIsAuthModalOpen(true))
    };

    return (
        <div className={s.box} style={{minHeight: minHeight}}>
            <div className={s.gameBox} style={{gridRowGap: isSponsorGame}}>
                {
                    games && games.map((item, index) => {
                        // console.log('item ', item.isSponsored)
                        if (item.isSponsored == 0) {
                            return (
                                <GameCard
                                    key={index}
                                    item={item}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className={s.sponsorBox}>
                <div
                    className={s.sponsorCard}
                    style={{backgroundImage: `url(${sponsorGames[0].mainImage})`}}
                >
                    <div className={s.content}>
                        <h3>{sponsorGames[0].name}</h3>
                        <a href="/">
                            {stateData.admin.userPage.link[stateData.lang]}
                        </a>
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={takeKeyHandler}
                    >
                        {stateData.home.get_key[stateData.lang]}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameBox;
