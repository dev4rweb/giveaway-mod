import React, {useEffect, useState} from 'react';
import "../../../sass/components/GiftBlock/GiftBlock.scss"
import GiftButton from "./GiftButton";

const GiftBlock = ({gameId, gifts}) => {
    const [keys, setKeys] = useState([
        {id: 1, game_id: gameId, giftKey: '5896-7896-4445-128896-25'}
    ]);

    useEffect(() => {
        if (gifts.length > 0)
            setKeys(gifts)
    }, []);

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
                            {item.giftKey}
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
