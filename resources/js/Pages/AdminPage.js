import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <InertiaLink
                href="/logout"
                method="post"
                as="button"
                type="button"
            >
                Logout
            </InertiaLink>
        </div>
    );
};

export default AdminPage;
