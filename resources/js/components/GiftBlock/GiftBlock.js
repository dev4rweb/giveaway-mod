import React, {useEffect, useState} from 'react';
import "../../../sass/components/GiftBlock/GiftBlock.scss"
import GiftButton from "./GiftButton";
import {createGift, removeGift, updateGift} from "../../actions/gifts";
import {useDispatch, useSelector} from "react-redux";


const GiftBlock = ({gameId, gifts}) => {
    const dispatch = useDispatch()
    const isError = useSelector(state => state.error.error)
    const [keys, setKeys] = useState([
        {id: 1, game_id: gameId, giftKey: '5896-7896-4445-128896-25'}
    ]);

    useEffect(() => {
        if (gifts.length > 0)
            setKeys(gifts)
    }, []);

    const testApi = () => {
        // dispatch(getGifts())
        /*const gift = {
            giftKey: '0000-0000-0000-0011',
            game_id: 26,
        }
        dispatch(createGift(gift))*/

        /*
        TODO: updated gift but didn't state
        const gift = {
            id: 201,
            giftKey: '1000-0000-0000-000'
        }
        dispatch(updateGift(gift))*/

        /* TODO: deleted but didn't state
        dispatch(removeGift(213))*/
    };

    const addKey = item => {
        console.log('addKey', item)
        // testApi()
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
