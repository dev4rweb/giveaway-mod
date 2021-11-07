import React from 'react';
import {useSelector} from "react-redux";

const UserTableItem = ({item, user}) => {
    const stateData = useSelector(state => state.lang)

    const date = new Date(item.endDate * 1000)
    const day = date.getDate() < 10 ?
        `0${date.getDate()}` :
        date.getDate();
    const month = (date.getMonth() + 1) < 10 ?
        `0${date.getMonth() + 1}` :
        date.getMonth() + 1;
    // let isWinner = item.winner_id == user.id ?
    let isWinner = item.winners.find(winner => winner.id == user.id) ?
        stateData.user.victory[stateData.lang] :
        stateData.user.fail[stateData.lang]

    item.status == 0 ?
        isWinner = stateData.user.ongoing[stateData.lang] :
        isWinner
    let color = isWinner === stateData.user.victory[stateData.lang] ||
    item.status == 0 ? '#60d346' : '#e72d2d';

    return (
        <tr>
            <th scope="row">#{item.id} {item.name}</th>
            <td>id{item.winner_id || 0}</td>
            <td>{`${day}/${month}/${date.getFullYear()}`}</td>
            <td>{item.users.length}</td>
            <td
                className="table-status"
                style={{color: color}}
                /*onClick={() => console.log('UserTableItem', user,
                    '\n Game', item, '\n isWinner ', isWinner)}*/
            >
                {isWinner}
            </td>
        </tr>
    );
};

export default UserTableItem;
