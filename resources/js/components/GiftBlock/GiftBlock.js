import React, {useState} from 'react';
import "../../../sass/components/GiftBlock/GiftBlock.scss"
import GiftButton from "./GiftButton";

const GiftBlock = ({gameId}) => {
    const [keys, setKeys] = useState([
        {id: 1, game_id: gameId, key: '5896-7896-4445-128896-25'}
    ]);

    const addKey = item => {
        console.log('addKey', item)
    };

    return (
        <div className="gift-container">
            <ul className="gift-list">
                {keys && keys.map((item, index) =>
                    <li
                        key={index}
                        className="gift-list-item"
                    >
                        <span>
                            #{index + 1} -
                        </span>
                        <p>
                            {item.key}
                        </p>
                    </li>
                )}
            </ul>
            <GiftButton
                nextId={keys.length + 1}
                addKey={addKey}
            />
        </div>
    );
};

export default GiftBlock;
