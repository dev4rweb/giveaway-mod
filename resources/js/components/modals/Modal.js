import React from 'react';
import s from '../../../sass/components/Modal.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthModalOpen} from "../../reducers/modalReducer";

const Modal = ({children, zIndex = 10}) => {

    const dispatch = useDispatch()
    const visible = useSelector(state => state.modal.modalIsAuth)
    const rootClasses = [s.modal]

    if (visible) {
        rootClasses.push(s.active)
    }

    const handleClose = (ev) => {
        dispatch(setIsAuthModalOpen(false))
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

export default Modal;
