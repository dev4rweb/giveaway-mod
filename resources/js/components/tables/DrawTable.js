import React from 'react';
import s from '../../../sass/components/DrawWinner.module.scss'
import {useSelector} from "react-redux";

const DrawTable = ({users}) => {
    const stateData = useSelector(state => state.lang)

    const changeUser = (ev, user) => {
        console.log(user)
    }

    return (
        <table className="table table-striped">
            <tbody>
            {
                users.map((user, index) =>
                    <tr key={index}>
                        <th scope="row">#{user.id}</th>
                        <td>{user.name}</td>
                        <td>profile link</td>
                        <td
                            className={s.drawOther}
                            onClick={event => changeUser(event, user)}>
                            {stateData.admin.createGive.btnDrawOther[stateData.lang]}
                        </td>
                    </tr>
            )
            }
            </tbody>
        </table>
    );
};

export default DrawTable;
