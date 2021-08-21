import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "../../../sass/components/Modal.module.scss";
import {setModalDrawWinner} from "../../reducers/modalReducer";

const ModalDrawWinner = ({children, zIndex = 10}) => {
    const dispatch = useDispatch()
    const visible = useSelector(state => state.modal.modalDrawWinner)
    const rootClasses = [s.modal]

    if (visible) {
        rootClasses.push(s.active)
    }

    const handleClose = (ev) => {
        dispatch(setModalDrawWinner(false))
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

export default ModalDrawWinner;
