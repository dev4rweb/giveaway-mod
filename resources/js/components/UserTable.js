import React, {useState} from 'react';
import '../../sass/components/AdminTable.scss'
import {useSelector} from "react-redux";

const UserTable = ({games, user}) => {
    const stateData = useSelector(state => state.lang)
    const [state, setState] = useState([
        {id: 1, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.victory[stateData.lang]},
        {id: 2, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.fail[stateData.lang]},
        {id: 3, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.victory[stateData.lang]},
        {id: 4, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.fail[stateData.lang]},
        {id: 5, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.victory[stateData.lang]},
        {id: 6, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.fail[stateData.lang]},
        {id: 7, competition: 77, owner: 7988, date: '10/10/2021', people: 780, result: stateData.user.victory[stateData.lang]},
    ]);

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">{stateData.user.comp[stateData.lang]}</th>
                <th scope="col">{stateData.user.own[stateData.lang]}</th>
                <th scope="col">{stateData.user.date[stateData.lang]}</th>
                <th scope="col">{stateData.user.amount[stateData.lang]}</th>
                <th scope="col">{stateData.user.res[stateData.lang]}</th>
            </tr>
            </thead>
            <tbody>
            {games.map((item, index) => {
                /*if (item.result.includes('Неудача')
                    || item.result.includes('Failure')) color = '#e72d2d';*/
                const date = new Date(item.startDate * 1000)
                const day = date.getDate() < 10 ?
                    `0${date.getDate()}` :
                    date.getDate();
                const month = (date.getMonth() + 1) < 10 ?
                    `0${date.getMonth() + 1}` :
                    date.getMonth() + 1;
                const isWinner = item.winner_id == user.id ? 'won' : 'failure'
                let color = isWinner === true ? '#60d346' : '#e72d2d';

                // console.log('date', date)
                return (
                    <tr key={index}>
                        <th scope="row">#{item.id}</th>
                        <td>id{item.winner_id}</td>
                        <td>{`${day}/${month}/${date.getFullYear()}`}</td>
                        <td>{item.users.length}</td>
                        <td
                            className="table-status"
                            style={{color: color}}
                        >
                            {isWinner}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default UserTable;
