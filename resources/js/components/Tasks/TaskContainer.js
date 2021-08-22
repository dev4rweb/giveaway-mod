import React, {useEffect} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import TaskBlock from "./TaskBlock";
import {
    setDataTaskOne,
    setDataTaskThree,
    setDataTaskTwo,
    setTaskOne,
    setTaskThree,
    setTaskTwo
} from "../../reducers/taskTypeReducer";

const TaskContainer = ({tasks}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const taskSelectorOne = useSelector(state => state.taskType.taskOne)
    const taskSelectorTwo = useSelector(state => state.taskType.taskTwo)
    const taskSelectorThree = useSelector(state => state.taskType.taskThree)

    useEffect(() => {
        if ( tasks.length > 0)
            for (let i = 0; i < tasks.length; i++) {
                if (i === 0) {
                    dispatch(setTaskOne(tasks[0].taskType))
                    dispatch(setDataTaskOne(tasks[0]))
                }
                if (i === 1) {
                    dispatch(setTaskTwo(tasks[1].taskType));
                    dispatch(setDataTaskTwo(tasks[1]))
                }
                if (i === 2) {
                    dispatch(setTaskThree(tasks[2].taskType))
                    dispatch(setDataTaskThree(tasks[2]))
                }
            }
    }, []);

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
