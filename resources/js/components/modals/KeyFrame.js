import React from 'react';
import s from '../../../sass/components/ModalKey.module.scss'
import {CopyToClipboard} from "react-copy-to-clipboard/src/Component";
import {useSelector} from "react-redux";

const KeyFrame = () => {
    const value = '5896-7896-4445-128896-25'
    const stateData = useSelector(state => state.lang)
    return (
        <div>
            <p>{stateData.home.cong[stateData.lang]}</p>
            <div className={s.modalKey}>
                <span>{value}</span>
                <CopyToClipboard text={value}>
                    <button>{stateData.home.copy[stateData.lang]}</button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default KeyFrame;
