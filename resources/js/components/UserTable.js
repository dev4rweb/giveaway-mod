import React, {useState} from 'react';
import '../../sass/components/AdminTable.scss'
import {useSelector} from "react-redux";

const UserTable = () => {
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
            {state.map((item, index) => {
                let color = '#60d346';
                if (item.result.includes('Неудача')
                    || item.result.includes('Failure')) color = '#e72d2d';

                return (
                    <tr key={index}>
                        <th scope="row">#{item.competition}</th>
                        <td>id{item.owner}</td>
                        <td>{item.date}</td>
                        <td>{item.people}</td>
                        <td
                            className="table-status"
                            style={{color: color}}
                        >
                            {item.result}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default UserTable;
