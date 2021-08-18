import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import AdminTableCompetitionItem from "./AdminTableCompetition/AdminTableCompetitionItem";

const AdminTableCompetitions = () => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const games = useSelector(state => state.games.games)
    // console.log('AdminTableCompetitions', games)
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">{stateData.admin.compPage.table.give[stateData.lang]}</th>
                <th scope="col">{stateData.admin.compPage.table.owner[stateData.lang]}</th>
                <th scope="col">{stateData.admin.compPage.table.created[stateData.lang]}</th>
                <th scope="col">{stateData.admin.compPage.table.status[stateData.lang]}</th>
                <th scope="col"/>
                <th scope="col"/>
                <th scope="col"/>
            </tr>
            </thead>

            <tbody>
            {
                games && games.length >0
                    &&
                    games.map((item, index) =>
                        <AdminTableCompetitionItem item={item} key={item.id} />)
            }
            </tbody>
        </table>
    );
};

export default AdminTableCompetitions;
