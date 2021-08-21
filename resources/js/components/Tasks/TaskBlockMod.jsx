import React, {useState} from 'react';
import '../../../sass/components/taskBlock.scss'
import {Radio, RadioGroup} from "react-custom-radio-buttons";
import {useSelector} from "react-redux";
import RadioItem from "./RadioItem";
import CustomRadioGroup from "./CustomRadioGroup";

const TaskBlockMod = ({selector}) => {


    return (
        <div className="task-block">
            <div className="radio-choice">
                <CustomRadioGroup items={selector} />
            </div>
        </div>
    );
};

export default TaskBlockMod;