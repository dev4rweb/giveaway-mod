import React from 'react';
import '../../../sass/components/taskBlock.scss'
import SelectTasks from "../UI/SelectTasks";
import TaskBlockMod from "./TaskBlockMod";
import {useDispatch} from "react-redux";

const TaskBlock = ({selector, setTask, setSelectedTask, removeInitial = null, title = 'Task'}) => {
    const dispatch = useDispatch()

    const handleTaskChange = selectedOption => {
        console.log('selectedOption',selectedOption);
        if (removeInitial) {
            dispatch(removeInitial(null))
        }
        if (selectedOption) {
            dispatch(setTask(selectedOption));
        } else {
            dispatch(setTask(null));
            if (setSelectedTask) {
                dispatch(setSelectedTask(null))
            }
        }
    };


    return (
        <div className="task-wrapper mb-3">
            <SelectTasks
                handleTaskChange={handleTaskChange}
                title={title}
            />
            {
                selector !== null && selector &&
                <TaskBlockMod
                    selector={selector}
                    setSelectedTask={setSelectedTask}
                />
            }
        </div>
    );
};

export default TaskBlock;
