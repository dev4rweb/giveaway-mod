import React from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

const UserPage = ({user}) => {
    return (
        <div>
            <h1>User Page</h1>
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

export default UserPage;
