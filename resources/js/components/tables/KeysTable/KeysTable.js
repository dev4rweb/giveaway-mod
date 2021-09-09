import React from 'react';
import {useSelector} from "react-redux";
import KeysTableItem from "./KeysTableItem";

const KeysTable = ({gifts}) => {
    const stateData = useSelector(state => state.lang)
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">Num</th>
                <th scope="col">{stateData.user.gift[stateData.lang]}</th>
            </tr>
            </thead>
            <tbody>
            {
                gifts.map((item, index) =>
                    <KeysTableItem
                        key={index}
                        item={item}
                        index={index}
                    /> )
            }
            </tbody>
        </table>
    );
};

export default KeysTable;
