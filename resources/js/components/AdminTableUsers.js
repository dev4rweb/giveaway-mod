import React, {useState} from 'react';
import '../../sass/components/AdminTable.scss'
import axios from "axios";
import Loader from "./Loader";
import {useSelector} from "react-redux";

const AdminTableUsers = ({users}) => {
    const stateData = useSelector(state => state.lang)
    const removeFirstElem = users.shift();
    const [state, setState] = useState(users);
    const [loading, setLoading] = useState(false);

    function deleteHandler(item) {
        console.log(item);
/*        setLoading(true);
        axios.delete(`/admin-panel/destroy/${item.id}`)
            .then(res => {
                setLoading(false);
                console.log(res);
                res.data.models.shift(); // remove admin from array
                setState(res.data.models);
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            });*/
    }

    if (loading) {
        return <Loader/>
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
                <th scope="col"> </th>
            </tr>
            </thead>
            <tbody>
            {state.map((item, index) => {
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
