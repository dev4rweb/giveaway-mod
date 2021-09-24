import React from 'react';
import s from "../../../sass/components/GameDescription.module.scss";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {useSelector} from "react-redux";

const SwitchGameDescBtn = ({task, userTasks, handleClick}) => {
    const stateData = useSelector(state => state.lang)
    const doneTask = userTasks.find(item => item.task_id === task.id)
    // console.log('SwitchGameDescBtn', doneTask)

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
                className={s.clipboard}
                onClick={event => handleClick(event, task)}
            >
                {
                    stateData.home.visit[stateData.lang]
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
