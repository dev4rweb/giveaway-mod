import React, {useEffect} from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import TaskBlock from "./TaskBlock";
import {
    setTaskThree,
    setTaskTwo
} from "../../reducers/taskTypeReducer";
import {
    dataTasksOneAction,
    setInitialSelectedTaskOne, setSelectedTaskOneAction,
} from "../../reducers/TaskReducer";

const TaskContainer = ({tasks}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)

    const taskSelectorOne = useSelector(state => state.tasks.dataTasksOne)
    const initialSelectorTaskOne = useSelector(state => state.tasks.initialSelectedTaskOne)

    const taskSelectorTwo = useSelector(state => state.taskType.taskTwo)
    const taskSelectorThree = useSelector(state => state.taskType.taskThree)
    console.log('TaskContainer tasks', tasks)



    return (
        <div className={s.tasksBlock}>
            <p>{stateData.admin.createGive.cond[stateData.lang]}</p>
            <div className={s.tasks}>
                {
                    initialSelectorTaskOne !== null ?
                        <TaskBlock
                            selector={initialSelectorTaskOne}
                            setTask={dataTasksOneAction}
                            removeInitial={setInitialSelectedTaskOne}
                            setSelectedTask={setSelectedTaskOneAction}
                        />
                        :
                        <TaskBlock
                            selector={taskSelectorOne}
                            setTask={dataTasksOneAction}
                            setSelectedTask={setSelectedTaskOneAction}
                        />

                }
                <TaskBlock
                    selector={taskSelectorTwo}
                    setTask={setTaskTwo}
                />
                <TaskBlock
                    selector={taskSelectorThree}
                    setTask={setTaskThree}
                />
            </div>
        </div>
    );
};

export default TaskContainer;
