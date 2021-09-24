import React from 'react';
import s from '../../../sass/components/DrawWinner.module.scss'
import {useSelector} from "react-redux";

const DrawTable = ({users, canChange, changeOneCandidate}) => {
    const stateData = useSelector(state => state.lang)
    const game = useSelector(state => state.games.editDrawWinner)
    const usersGames = useSelector(state => state.userGame.usersGames)
    const usersTasks = useSelector(state => state.usersTasks.usersTasks)
    const style = canChange ?
        {
            color: '#f0f0f0',
            opacity: '.5',
            cursor: 'not-allowed'
        } : {}

    const changeUser = (ev, user) => {
        if (!canChange) {
            changeOneCandidate(user)
        }
        // console.log(user, ' can ', canChange);
    }

    return (
        <table className="table table-striped">
            <tbody>
            {
                users.map((user, index) => {
                        const userGames = usersGames.filter(i => i.user_id === user.id);
                        const userGame = userGames.find(i => i.game_id === game.id)
                        const userTasks = usersTasks.filter(i => i.user_id === user.id && i.is_done == 1)
                        const tempUserTasks = []
                        userTasks.map(i => {
                            const task = game.tasks.find(item => item.id === i.task_id)
                            if (task) tempUserTasks.push(task)
                        });
                        // console.log('userGames',userGames)
                        // console.log('userGame',userGame)
                        // console.log('userTasks', userTasks)
                        // console.log('tempUserTasks', tempUserTasks)
                        return (
                            <tr key={index}>
                                <th scope="row">#{user.id}</th>
                                <td>{user.name}</td>
                                <td>{userGame.points} points</td>
                                <td>
                                    <ol>
                                        {
                                            tempUserTasks &&
                                            tempUserTasks.map(task => <li key={task.id}>{task.task}</li>)
                                        }
                                    </ol>
                                </td>
                                <td>profile link</td>
                                <td
                                    className={s.drawOther}
                                    style={style}
                                    onClick={event => changeUser(event, user)}>
                                    {stateData.admin.createGive.btnDrawOther[stateData.lang]}
                                </td>
                            </tr>
                        )
                    }
                )
            }
            </tbody>
        </table>
    );
};

export default DrawTable;
