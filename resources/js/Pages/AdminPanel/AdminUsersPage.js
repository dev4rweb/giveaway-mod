import React from 'react';
import s from "../../../sass/pages/AdminMainPage.module.scss";
import {useSelector} from "react-redux";
import AdminTableUsers from "../../components/AdminTableUsers";

const AdminUsersPage = ({users}) => {
    const stateData = useSelector(state => state.lang)
    return (
        <div className={`container ${s.adminMainPage}`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.usersTab[stateData.lang]}</p>
                <hr/>
            </div>

            {
                users && users.length > 1 ?
                    <AdminTableUsers users={users} /> :
                    <h1>Users - 0</h1>
            }

        </div>
    );
};

export default AdminUsersPage;
