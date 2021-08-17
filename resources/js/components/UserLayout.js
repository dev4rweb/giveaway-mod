import React from 'react';
import UserHeader from "./UserHeader";

const UserLayout = ({children}) => {
    return (
        <main>
            <UserHeader/>
            <article>
                {children}
            </article>
        </main>
    );
};

export default UserLayout;
