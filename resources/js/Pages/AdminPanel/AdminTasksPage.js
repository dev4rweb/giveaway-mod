import React from 'react';
import s from '../../../sass/pages/AdminPage.module.scss'
import AdminLayout from "../../components/AdminLayout";
import AdminSideBar from "../../components/UI/AdminSideBar";

const AdminTasksPage = () => {
    return (
        <AdminLayout>
            <div className={`container admin-page ${s.adminPage}`}>
                <AdminSideBar/>
                <div>
                    Content
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminTasksPage;
