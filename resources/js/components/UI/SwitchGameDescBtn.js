import React, {useEffect} from 'react';
import s from "../../../sass/components/GameDescription.module.scss";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {useDispatch, useSelector} from "react-redux";
import {
    setModalTwitterViewPostAction,
    setModalVisitWebsiteAction,
    setVisitWebsiteDetailsAction
} from "../../reducers/modalReducer";

const SwitchGameDescBtn = ({task, userTasks}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
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
