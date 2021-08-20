import React from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useSelector} from "react-redux";
import TaskBlock from "./TaskBlock";
import {setTaskOne, setTaskThree, setTaskTwo} from "../../reducers/taskTypeReducer";

const TaskContainer = () => {
    const stateData = useSelector(state => state.lang)
    const taskSelectorOne = useSelector(state => state.taskType.taskOne)
    const taskSelectorTwo = useSelector(state => state.taskType.taskTwo)
    const taskSelectorThree = useSelector(state => state.taskType.taskThree)

    return (
        <div className={s.tasksBlock}>
            <p>{stateData.admin.createGive.cond[stateData.lang]}</p>
            <div className={s.tasks}>
                <TaskBlock selector={taskSelectorOne} setTask={setTaskOne}/>
                <TaskBlock selector={taskSelectorTwo} setTask={setTaskTwo}/>
                <TaskBlock selector={taskSelectorThree} setTask={setTaskThree}/>
            </div>
        </div>
    );
};

export default TaskContainer;
