import React, {createRef, useState} from 'react';
import '../../../sass/components/UI/InputAttach.scss'
import {setError, setLoading} from "../../reducers/errorReducer";
import axios from "axios";
import {useDispatch} from "react-redux";
import {changeNewGame} from "../../reducers/gameReducer";

const InputAttachFile = ({game, setGame, inputName}) => {
    const dispatch = useDispatch()
    let btn = createRef();

    const changeHandlerInput = e => {
        // console.log('changeHandlerInput')
        setGame({
            ...game,
            [inputName]: e.target.value
        })
    };

    const changeHandler = e => {
        // console.log('changeHandler', e.target.value)

        const fd = new FormData();
        fd.set('image', e.target.files[0])

        axios.post('/file-upload', fd)
            .then(res => {
                // console.log(res)
                if (res.data.success) {
                    let filePath = res.data.filepath
                    setGame({
                            ...game,
                            [inputName]: filePath
                        })
                } else {
                    dispatch(setError(res.data.message))
                }
            })
            .catch(err => {
                dispatch(setError(err.response.message))
            });
    };

    const uploadFile = e => {
        // console.log('uploadFile')
        btn.current.click();
    };

    return (
        <div className="input-attach">
            <input
                type="text"
                name={inputName}
                value={game[inputName]}
                autoComplete="off"
                onChange={changeHandlerInput}
                placeholder="file link"
                className="text-field"
            />
            <input
                type="file"
                ref={btn}
                onChange={changeHandler}
                className="attach-file"
            />
            <button
                className="btn-add"
                onClick={uploadFile}
            >
                Choose file
            </button>
        </div>
    );
};

export default InputAttachFile;
