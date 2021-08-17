import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "../../../sass/components/Modal.module.scss";
import {setModalAuth} from "../../reducers/modalReducer";

const ModalAuth = ({children, zIndex = 10}) => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const visible = useSelector(state => state.modal.modalAuth)
    const rootClasses = [s.modal]

    if (visible) {
        rootClasses.push(s.active)
    }

    const handleClose = (ev) => {
        dispatch(setModalAuth(false))
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

export default ModalAuth;
