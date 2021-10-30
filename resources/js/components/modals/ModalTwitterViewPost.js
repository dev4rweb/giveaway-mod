import React from 'react';
import s from '../../../sass/components/Modal.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setModalTwitterViewPostAction} from "../../reducers/modalReducer";

const ModalTwitterViewPost = ({children, zIndex = 20}) => {
    const dispatch = useDispatch()
    const visible = useSelector(state => state.modal.modalTwitterViewPost)
    const rootClasses = [s.modal]

    if (visible) rootClasses.push(s.active)

    const handleClose = e => {
        dispatch(setModalTwitterViewPostAction(false))
    };

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={handleClose}
            style={{zIndex: zIndex}}
        >
            <div
                className={`${s.modalBody}  ${s.animate}`}
                onClick={event => event.stopPropagation()}
            >
                <span
                    className={s.close}
                    onClick={handleClose}
                >
                  &times;
              </span>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalTwitterViewPost;
