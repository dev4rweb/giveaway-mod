import React from 'react';
import '../../../sass/components/taskBlock.scss'
import SelectTasks from "../UI/SelectTasks";
import TaskBlockMod from "./TaskBlockMod";
import {useDispatch} from "react-redux";

const TaskBlock = ({selector, setTask}) => {
    const dispatch = useDispatch()



    const handleTaskChange = selectedOption => {
        if (selectedOption) {
            dispatch(setTask(selectedOption))
        } else {
            dispatch(setTask(null))
        }
    };


    return (
        <div className="task-wrapper">
            <SelectTasks
                handleTaskChange={handleTaskChange}
            />
            {selector !== null && selector &&
            <TaskBlockMod selector={selector}/>}
        </div>
    );
};

export default TaskBlock;
