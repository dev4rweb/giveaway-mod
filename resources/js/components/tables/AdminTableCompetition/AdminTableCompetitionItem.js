import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeGame} from "../../../actions/games";
import {setEditPage, setModalDrawWinner} from "../../../reducers/modalReducer";
import {editDrawWinner, editGame} from "../../../reducers/gameReducer";
import {
    dataTasksOneAction,
    setTasksForGameAction,
    setTasksForGameThreeAction,
    setTasksForGameTwoAction
} from "../../../reducers/TaskReducer";
const AdminTableCompetitionItem = ({item}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const date = new Date(item.endDate * 1000)
    const day = date.getDate() < 10 ?
        `0${date.getDate()}` :
        date.getDate();
    const month = (date.getMonth() + 1) < 10 ?
        `0${date.getMonth() + 1}` :
        date.getMonth() + 1;
    const itemType = item.isCompetition == 1 ?
        stateData.admin.compPage.table.give[stateData.lang] :
        stateData.admin.compPage.table.giveaway[stateData.lang]
    // console.log('date', date)
    let color = '#e72d2d';
    if (item.status == 3) color = '#cd953e';
    if (item.status == 0) color = '#60d346';

    const translateStatus = () => {
        if (item.status == 0) {
            return stateData.admin.compPage.table.active[stateData.lang]
        }
        if (item.status == 3) {
            return stateData.admin.compPage.table.del[stateData.lang]
        }
        if (item.status == 1) {
            return stateData.admin.compPage.table.play[stateData.lang]
        }
        if (item.status == 2) {
            return stateData.admin.compPage.table.moder[stateData.lang]
        }
    };

    const editHandler = (ev) => {
        // console.log('editHandler', item)
        dispatch(setEditPage(true))
        dispatch(editGame(item))
        dispatch(setTasksForGameAction(item))
        dispatch(setTasksForGameTwoAction(item))
        dispatch(setTasksForGameThreeAction(item))
    };

    const drawHandler = async (ev) => {
        // console.log('drawHandler', item)
        // dispatch(randomCandidates(item))
        dispatch(setModalDrawWinner(true))
        dispatch(editDrawWinner(item))
    };

    const removeHandler = (ev) => {
        // console.log('removeHandler', item)
        dispatch(removeGame(item.id))
    };

    return (
        <tr>
            <th scope="row">#{item.id}</th>
            <th scope="row">{item.name}</th>
            <th scope="row">{itemType}</th>
            <td>id{/*{item.owner}*/}1</td>
            <td>
                {`${day}/${month}/${date.getFullYear()}`}
            </td>

            <td
                className={`table-status `}
                style={{color: color}}
            >
                {translateStatus()}
            </td>
            <td
                className="grey-text"
                onClick={editHandler}
            >
                {stateData.admin.compPage.table.edit[stateData.lang]}
            </td>
            <td
                className="grey-text"
                onClick={drawHandler}
            >
                {stateData.admin.compPage.table.draw[stateData.lang]}
            </td>
            <td
                className="grey-text"
                onClick={removeHandler}
            >
                {stateData.admin.compPage.table.remove[stateData.lang]}
            </td>
        </tr>
    );
};

export default AdminTableCompetitionItem;
