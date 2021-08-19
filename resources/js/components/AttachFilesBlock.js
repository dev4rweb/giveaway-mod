import React from 'react';
import s from '../../sass/pages/CreatePage.module.scss'
import {useSelector} from "react-redux";
import InputAttachFile from "./UI/InputAttachFile";

const AttachFilesBlock = ({game, setGame}) => {
    const stateData = useSelector(state => state.lang)

    return (
        <div className={s.attachFile}>
            <p className={s.attachTitle}>{stateData.admin.createGive.primImg[stateData.lang]}</p>
            <InputAttachFile
                game={game}
                setGame={setGame}
                inputName={'mainImage'}
            />
            <p className={s.attachTitle}>{stateData.admin.createGive.secImg[stateData.lang]}</p>
            <InputAttachFile
                game={game}
                setGame={setGame}
                inputName={'secondaryImage'}
            />
            <p className={s.attachTitle}>{stateData.admin.createGive.leftImg[stateData.lang]}</p>
            <InputAttachFile
                game={game}
                setGame={setGame}
                inputName={'leftImage'}
            />
            <p className={s.attachTitle}>{stateData.admin.createGive.rightImg[stateData.lang]}</p>
            <InputAttachFile
                game={game}
                setGame={setGame}
                inputName={'rightImage'}
            />
        </div>
    );
};

export default AttachFilesBlock;
