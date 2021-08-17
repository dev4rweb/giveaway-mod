import React from 'react';
import AdminHeader from "./AdminHeader";

const AdminLayout = ({children, hiddenTabHandler}) => {
    return (
        <main className='admin-panel'>
            <AdminHeader
                hiddenTabHandler={hiddenTabHandler}
            />
            <article>
                {children}
            </article>
        </main>
    );
};

export default AdminLayout;
