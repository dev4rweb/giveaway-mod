import React from 'react';
import s from '../../../sass/pages/CreatePage.module.scss'
import {useSelector} from "react-redux";
import TaskBlock from "./TaskBlock";
import {
    dataTasksOneAction, dataTasksThreeAction,
    dataTasksTwoAction,
    setInitialSelectedTaskOne,
    setInitialSelectedTaskThree,
    setInitialSelectedTaskTwo,
    setSelectedTaskOneAction, setSelectedTaskThreeAction,
    setSelectedTaskTwoAction,
} from "../../reducers/TaskReducer";

const TaskContainer = () => {

    const stateData = useSelector(state => state.lang)

    const taskSelectorOne = useSelector(state => state.tasks.dataTasksOne)
    const initialSelectorTaskOne = useSelector(state => state.tasks.initialSelectedTaskOne)
    const taskSelectorTwo = useSelector(state => state.tasks.dataTasksTwo)
    const initialSelectorTaskTwo = useSelector(state => state.tasks.initialSelectedTaskTwo)
    const taskSelectorThree = useSelector(state => state.tasks.dataTasksThree)
    const initialSelectorTaskThree = useSelector(state => state.tasks.initialSelectedTaskThree)

    // console.log('TaskContainer tasks', tasks)


    return (
        <div className={s.tasksBlock}>
            <p>{stateData.admin.createGive.cond[stateData.lang]}</p>
            <div className={s.tasks}>
                {
                    initialSelectorTaskOne !== null ?
                        <TaskBlock
                            title={stateData.home.taskOne[stateData.lang]}
                            selector={initialSelectorTaskOne}
                            setTask={dataTasksOneAction}
                            removeInitial={setInitialSelectedTaskOne}
                            setSelectedTask={setSelectedTaskOneAction}
                        />
                        :
                        <TaskBlock
                            title={stateData.home.taskOne[stateData.lang]}
                            selector={taskSelectorOne}
                            setTask={dataTasksOneAction}
                            setSelectedTask={setSelectedTaskOneAction}
                        />

                }
                {
                    initialSelectorTaskTwo !== null ?
                        <TaskBlock
                            title={stateData.home.taskTwo[stateData.lang]}
                            selector={initialSelectorTaskTwo}
                            removeInitial={setInitialSelectedTaskTwo}
                            setTask={dataTasksTwoAction}
                            setSelectedTask={setSelectedTaskTwoAction}
                        />
                        :

                        <TaskBlock
                            title={stateData.home.taskTwo[stateData.lang]}
                            selector={taskSelectorTwo}
                            setTask={dataTasksTwoAction}
                            setSelectedTask={setSelectedTaskTwoAction}
                        />
                }
                {
                    initialSelectorTaskThree !== null ?
                        <TaskBlock
                            title={stateData.home.taskThree[stateData.lang]}
                            selector={initialSelectorTaskThree}
                            removeInitial={setInitialSelectedTaskThree}
                            setTask={dataTasksThreeAction}
                            setSelectedTask={setSelectedTaskThreeAction}
                        />
                        :
                        <TaskBlock
                            title={stateData.home.taskThree[stateData.lang]}
                            selector={taskSelectorThree}
                            setTask={dataTasksThreeAction}
                            setSelectedTask={setSelectedTaskThreeAction}
                        />
                }
            </div>
        </div>
    );
};

export default TaskContainer;
