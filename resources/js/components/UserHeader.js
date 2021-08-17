import React from 'react';
import s from '../../sass/components/UserHeader.module.scss'
import {useSelector} from "react-redux";
import {InertiaLink} from "@inertiajs/inertia-react";

const UserHeader = () => {
    const stateData = useSelector(state => state.lang)
    return (
        <header className={s.userHeader}>
            <div className="container">
                <div>
                    <h1>
                        <InertiaLink href="/">Giveaway</InertiaLink>
                    </h1>
                    <h4>{stateData.user.heading[stateData.lang]}</h4>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;
