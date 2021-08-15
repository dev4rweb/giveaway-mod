import React from 'react';
import s from '../../sass/components/Modal.module.scss'

const Modal = ({children, visible, setVisible, zIndex = 10}) => {

    const rootClasses = [s.modal]

    if (visible) {
        rootClasses.push(s.active)
    }


    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
            style={{zIndex: zIndex}}
        >
            <div
                className={`${s.modalBody}  ${s.animate}`}
                onClick={event => event.stopPropagation()}
            >
                <span
                    className={s.close}
                    onClick={() => setVisible(false)}
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
