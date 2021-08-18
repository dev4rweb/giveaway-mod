import React from 'react';
import '../../../sass/components/AdminTable.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../actions/users";

const AdminTableUsers = ({users}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    // const removeFirstElem = users.shift();

    function deleteHandler(item) {
        // console.log('deleteHandler', item);
        dispatch(removeUser(item.id))
    }

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Id</th>
                <th scope="col">{stateData.admin.userPage.date[stateData.lang]}</th>
                <th scope="col">{stateData.admin.userPage.give[stateData.lang]}</th>
                <th scope="col">{stateData.admin.userPage.part[stateData.lang]}</th>
                <th scope="col">{stateData.admin.userPage.link[stateData.lang]}</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {users.map((item, index) => {
                const date = new Date(item.created_at);
                const day = date.getDate() < 10 ?
                    `0${date.getDate()}` :
                    date.getDate();
                const month = (date.getMonth() + 1) < 10 ?
                    `0${date.getMonth() + 1}` :
                    date.getMonth() + 1;

                return (
                    <tr key={index}>
                        <th scope="row">#{index}</th>
                        <td>id{item.id}</td>
                        <td>
                            {`
                        ${day}/${month}/${date.getFullYear()}
                        `}
                        </td>

                        <td>789</td>
                        <td>789</td>
                        <td
                            className={`link`}
                        >
                            <a href="/">{stateData.admin.userPage.link[stateData.lang]}</a>
                        </td>
                        <td className="remove-column">
                            <span
                                onClick={event => deleteHandler(item)}
                            >
                                X
                            </span>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default AdminTableUsers;
