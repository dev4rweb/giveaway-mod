import React from 'react';
import '../../../sass/pages/userPage.scss'
import {useSelector} from "react-redux";
import KeysTable from "../../components/tables/KeysTable/KeysTable";

const UserWinPage = () => {
    const stateData = useSelector(state => state.lang)
    const gifts = useSelector(state => state.userPage.gifts)
    // console.log('UserWinPage', gifts)
    return (
        <div className={`container user-page`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.mainWin[stateData.lang]}</p>
                <hr/>
            </div>

            <div>
                {
                    gifts.length > 0 ?
                        <KeysTable gifts={gifts} />
                        :
                        <h1>You have no any keys</h1>
                }
            </div>
        </div>
    );
};

export default UserWinPage;
