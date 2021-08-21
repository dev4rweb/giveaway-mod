import React, {useState} from 'react';
import RadioItem from "./RadioItem";
const CustomRadioGroup = ({items}) => {
    const [selectedValue, setSelectedValue] = useState(0);

    const handleChange = (event) => {
        // console.log('val ', event.target.value)
        setSelectedValue(event.target.value);
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
                    />
                )
            }
        </div>
    );
};

export default CustomRadioGroup;
