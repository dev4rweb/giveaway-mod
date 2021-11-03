import React, {useEffect} from 'react';
import s from "../../../sass/components/GameDescription.module.scss";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {useDispatch, useSelector} from "react-redux";
import {
    setModalTwitterViewPostAction,
    setModalVisitWebsiteAction,
    setVisitWebsiteDetailsAction
} from "../../reducers/modalReducer";
import {createUserTask} from "../../actions/userTask";

const SwitchGameDescBtn = ({task, userTasks}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const visible = useSelector(state => state.modal.modalGameDetails)
    const user = useSelector(state => state.user.user)
    let doneTask = userTasks.find(item => item.task_id == task.id)
    // console.log('SwitchGameDescBtn', doneTask)
    // console.log('SwitchGameDescBtn userTasks', userTasks)

    const checkWebsiteHandler = (e) => {
        // console.log('checkWebsiteHandler')
        dispatch(setModalVisitWebsiteAction(true))
        dispatch(setVisitWebsiteDetailsAction(task))
        // handleClick(event, task)
    };


    if (doneTask && doneTask.is_done == 1) {
        return (
            <button
                className={s.clipboard}
                disabled={true}
                style={{
                    textDecoration: "none",
                    color: "#60b95b"
                }}
            >
                {
                    stateData.home.done[stateData.lang]
                }
            </button>
        )
    }

    if (task.taskTypeId === 14) {
        // other fields
        /*https://developers.facebook.com/docs/sharing/reference/share-dialog*/
        const facebookSharePost = () => {
            doneTask = userTasks.find(item => item.task_id == task.id)
            console.log('task click', task)
            console.log('doneTask', doneTask)
            FB.init({
                appId: '260240649373300',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v12.0'
            });
            FB.ui({
                method: 'share',
                href: task.url
            },   function(response) {
                if (response && !response.error_message) {
                    alert('Posting completed.');
                    const userTask = {
                        user_id: user.id,
                        task_id: task.id,
                        is_done: 1
                    }
                    dispatch(createUserTask(userTask))
                } else {
                    alert('Error while posting.');
                }
            });
        };
        return  (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={event => facebookSharePost()}
            >
                Share
            </button>
        )
    }

    if (task.task.toLowerCase().includes('check website')) {
        return (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={event => checkWebsiteHandler(event)}
            >
                {
                    stateData.home.plus_one[stateData.lang]
                }
            </button>
        );
    }

    if (task.task.toLowerCase().includes('view post')) {
        const twitterViewPostHandler = e => {
            dispatch(setModalTwitterViewPostAction(true))
        };
        return (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={event => twitterViewPostHandler(event)}
            >
                {
                    stateData.home.plus_one[stateData.lang]
                }
            </button>
        );
    }

    return (
        <CopyToClipboard text={task.url}>
            <button
                className={s.clipboard}>
                {
                    stateData.home.copy[stateData.lang]
                }
            </button>
        </CopyToClipboard>
    );
};

export default SwitchGameDescBtn;
