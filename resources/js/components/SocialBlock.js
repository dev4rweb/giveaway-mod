import React from 'react';
import s from "../../sass/pages/HomePage.module.scss";
import steam from '../../assets/icons/steam.png'
import face from '../../assets/icons/face.png'
import telegram from '../../assets/icons/telegram.png'
import twitch from '../../assets/icons/twitch.png'
import fb from '../../assets/icons/fb.png'

const SocialBlock = () => {
    return (
        <div className={s.social}>
            <a href="#" target="_blank"><img src={steam} alt="steam"/></a>
            <a href="#" target="_blank"><img src={face} alt="face"/></a>
            <a href="#" target="_blank"><img src={telegram} alt="telegram"/></a>
            <a href="#" target="_blank"><img src={twitch} alt="twitch"/></a>
            <a href="#" target="_blank"><img src={fb} alt="fb"/></a>
        </div>
    );
};

export default SocialBlock;
