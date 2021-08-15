import React from 'react';
import s from '../../../../sass/components/GameCard/GameCard.module.scss'
import fullStar from '../../../../assets/icons/full-star.png';
import halfStar from '../../../../assets/icons/star.png';
import steam from '../../../../assets/icons/steam.png'
import {useSelector} from "react-redux";

const GameCard = ({item}) => {
    const stateData = useSelector(state => state.lang)
    const star = item.isFavorite == 1 ? fullStar : halfStar;

    const handleClick = (e) => {
        console.log('handleClick')
    };

    return (
        <div className={s.card} style={{backgroundImage: `url(${item.mainImage})`}}>
            <div className={s.starBox}><span><img src={star} alt="favorite"/></span></div>
            <div className={s.content}>
                <h3>{item.name}</h3>
                {
                    !item.isCompetition &&
                    <div className={s.steamBox}>
                        {
                            // item.taskOne &&
                            <a href="#"><img src={steam} alt="steam"/></a>
                        }
                        {
                            // item.taskTwo &&
                            <a href="#"><img src={steam} alt="steam"/></a>
                        }
                        {
                            // item.taskThree &&
                            <a href="#"><img src={steam} alt="steam"/></a>
                        }
                    </div>
                }

                <div className={s.btnBox}>
                    <button
                        className="btn btn-warning"
                        onClick={event => handleClick(event)}
                    >
                        {stateData.home.get_key[stateData.lang]}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
