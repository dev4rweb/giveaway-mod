import React, {useEffect} from 'react';
import s from '../../../sass/pages/AdminMainPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addGame, createGame, getGames, removeGame, updateGame} from "../../actions/games";
import Loader from "../../components/Loader";
import {setError} from "../../reducers/errorReducer";
import ErrorMessage from "../../components/UI/ErrorMessage";
import {setGames} from "../../reducers/gameReducer";
import {setAllUsers} from "../../reducers/userReducer";

const AdminMainPage = ({users, games}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)

    // console.log('AdminMainPage', games)

    return (
        <div className={`container ${s.adminMainPage}`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.mainTab[stateData.lang]}</p>
                <hr/>
            </div>

            <div
                className={`${s.item} ${s.green}`}
            >
                <p>
                    {stateData.admin.mainPage.register[stateData.lang]}
                </p>
                <span>
                    {users.length}
                </span>
            </div>

            <div
                className={`${s.item} ${s.orange}`}
            >
                <p>
                    {stateData.admin.mainPage.give[stateData.lang]}
                </p>
                <span>
                    {games.length}
                </span>
            </div>

            <div
                className={`${s.item} ${s.red}`}
            >
                <p>
                    {stateData.admin.mainPage.moder[stateData.lang]}
                </p>
                <span>
                    {
                        games.filter(game => game.status == 2).length
                    }
                </span>
            </div>
        </div>
    );
};

export default AdminMainPage;
