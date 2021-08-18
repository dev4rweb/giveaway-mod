import React from 'react';
import s from '../../sass/pages/CreatePage.module.scss'
import {useSelector} from "react-redux";

const AttachFilesBlock = ({game, setGame}) => {
    const stateData = useSelector(state => state.lang)

    return (
        <div className={s.attachFile}>
            <p className={s.attachTitle}>{stateData.admin.createGive.primImg[stateData.lang]}</p>
            {/*<InputAttach*/}
            {/*    nameUrl={`image`}*/}
            {/*    nameUpload={`imageFile`}*/}
            {/*    onChangeHandler={changeHandler}*/}
            {/*    placeholder={stateData.admin.createGive.imgLink[stateData.lang]}*/}
            {/*/>*/}
            <p className={s.attachTitle}>{stateData.admin.createGive.secImg[stateData.lang]}</p>
            {/*<InputAttach*/}
            {/*    nameUrl={`twoImage`}*/}
            {/*    nameUpload={`twoImageFile`}*/}
            {/*    onChangeHandler={changeHandler}*/}
            {/*    placeholder={stateData.admin.createGive.imgLink[stateData.lang]}*/}
            {/*/>*/}
            <p className={s.attachTitle}>{stateData.admin.createGive.leftImg[stateData.lang]}</p>
            {/*<InputAttach*/}
            {/*    nameUrl={`leftImage`}*/}
            {/*    nameUpload={`leftImageFile`}*/}
            {/*    onChangeHandler={changeHandler}*/}
            {/*    placeholder={stateData.admin.createGive.imgLink[stateData.lang]}*/}
            {/*/>*/}
            <p className={s.attachTitle}>{stateData.admin.createGive.rightImg[stateData.lang]}</p>
            {/*<InputAttach*/}
            {/*    nameUrl={`rightImage`}*/}
            {/*    nameUpload={`rightImageFile`}*/}
            {/*    onChangeHandler={changeHandler}*/}
            {/*    placeholder={stateData.admin.createGive.imgLink[stateData.lang]}*/}
            {/*/>*/}
        </div>
    );
};

export default AttachFilesBlock;
