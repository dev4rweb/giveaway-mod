import React, {useEffect, useState} from 'react';
import "../../../sass/components/GiftBlock/GiftBlock.scss"
import GiftButton from "./GiftButton";
import {createGift, removeGift, updateGift} from "../../actions/gifts";
import {useDispatch, useSelector} from "react-redux";


const GiftBlock = ({gameId, gifts}) => {
    const dispatch = useDispatch()
    const [keys, setKeys] = useState([
        // {id: 1, game_id: gameId, giftKey: '5896-7896-4445-128896-25'}
    ]);

    useEffect(() => {
        if (gifts.length > 0)
            setKeys(gifts)
    }, [gifts]);

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

        // dispatch(getTasks())
        /*const task = {
            game_id : 1,
            taskType : 1,
            task : 'Do something',
            url: 'www.google.com'
        }
        dispatch(createTask(task))*/

        /*const task = {
            id: 81,
            url: 'www.mail.ru'
        }
        dispatch(updateTask(task))*/

        /* TODO: deleted but didn't state
        dispatch(removeTask(81))*/
    };

    const addKey = item => {
        // console.log('addKey', item)
        const gift = {
            giftKey: item,
            game_id: gameId,
        }
        dispatch(createGift(gift))
    };

    const removeKey = item => {
        // console.log('removeKey', item)
        dispatch(removeGift(item.id))
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
                        <span
                            className="remove-key"
                            onClick={()=> removeKey(item)}
                        >
                            X
                        </span>
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
