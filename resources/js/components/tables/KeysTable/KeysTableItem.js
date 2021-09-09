import React from 'react';

const KeysTableItem = ({item, index}) => {
    return (
        <tr>
            <th scope="row">№ {index + 1}</th>
            <td>{item.giftKey}</td>
        </tr>
    );
};

export default KeysTableItem;
