import React from 'react';
import s from '../../sass/components/AdminHeader.module.scss'
import { InertiaLink } from '@inertiajs/inertia-react'
import {useSelector} from "react-redux";

const AdminHeader = ({hiddenTabHandler}) => {
    const stateData = useSelector(state => state.lang);
    return (
        <header className={s.adminHeader}>
            <div className="container">
                <div>
                    <h1>
                        <InertiaLink href="/">Giveaway</InertiaLink>
                    </h1>
                    <h4>{stateData.admin.heading[stateData.lang]}</h4>
                </div>
                <button
                    className="btn btn-warning w-100"
                    onClick={event => hiddenTabHandler(event)}
                >
                    {stateData.admin.btnCreate[stateData.lang]}
                </button>
            </div>
        </header>
    );
};

export default AdminHeader;
