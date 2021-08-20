import React, {useState} from 'react';
import '../../../sass/components/taskBlock.scss'
import {Radio, RadioGroup} from "react-custom-radio-buttons";
import {useSelector} from "react-redux";
import RadioItem from "./RadioItem";
import CustomRadioGroup from "./CustomRadioGroup";

const TaskBlockMod = ({selector}) => {
    const [opt, setOpt] = useState({})


    const onChange = option => {
        console.log('option', option);
        setOpt(option)
    };


    console.log('taskSelector',selector)
    return (
        <div className="task-block">
            <div className="radio-choice">
{/*                <RadioGroup
                    containerStyle="options-container"
                    onChange={onChange}
                >
                    {selector !== null && selector.map((option, index) =>
                       <RadioItem option={option} key={index} />
                    )}
                </RadioGroup>*/}
                <CustomRadioGroup items={selector} />
            </div>
        </div>
    );
};

export default TaskBlockMod;
