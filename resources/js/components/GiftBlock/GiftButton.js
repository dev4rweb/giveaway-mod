import React, {useState} from 'react';
import '../../../sass/components/UI/InputAttach.scss'
import '../../../sass/components/GiftBlock/GiftButton/gift-button.scss'

const GiftButton = ({nextId, addKey}) => {
    const [state, setState] = useState('');

    const handleClick = e => {
        if (state) {
            addKey(state);
            setState('')
        }
    };

    return (
        <div className="gift-button">
            <span>#{nextId}</span>
            <div className="input-attach">
                <input
                    type="text"
                    className="text-field"
                    value={state}
                    onChange={event => setState(event.target.value)}
                />
                <button
                    className="btn-plus"
                    onClick={handleClick}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default GiftButton;
