import React, {useState} from 'react';
import RadioItem from "./RadioItem";

const CustomRadioGroup = ({items, setSelectedTask}) => {
    const [selectedValue, setSelectedValue] = useState(0);

    const handleChange = (event) => {
        // console.log('handleChange', items)
        // console.log('val ', items[event.target.value])
        setSelectedValue(event.target.value)
    };

    return (
        <div>
            {
                items && items.map(
                    (item, index) =>
                    <RadioItem
                        key={index}
                        selectedValue={selectedValue}
                        handleChange={handleChange}
                        value={index}
                        option={item}
                        setSelectedTask={setSelectedTask}
                    />
                )
            }
        </div>
    );
};

export default CustomRadioGroup;
