import React from 'react';
import s from '../../../sass/components/Modal.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setModalVisitWebsiteAction, setVisitWebsiteDetailsAction} from "../../reducers/modalReducer";

const ModalVisitWebsite = ({children, zIndex = 20}) => {
    const dispatch = useDispatch()
    const visible = useSelector(state => state.modal.modalGameDetails)
    const rootClasses = [s.modal]

    if (visible) rootClasses.push(s.active)

    const handleClose = e => {
        dispatch(setModalVisitWebsiteAction(false))
        dispatch(setVisitWebsiteDetailsAction(null))
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

export default ModalVisitWebsite;
