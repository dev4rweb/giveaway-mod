import React, {useState} from 'react';
import DatePicker from 'react-date-picker';
import '../../../sass/components/UI/CustomDatePicker.scss'

const CustomDatePicker = ({name, text, val, setGame, game}) => {
    const [value, onChange] = useState(new Date(val * 1000));

    function changeHandler() {
        // console.log(value.getTime());
        setGame({
            ...game,
            [name]: value / 1000
        })
        // console.log('CustomDatePicker', game)
    }

    return (
        <div className="custom-date-picker">
            <p className="title-picker">{text}</p>
            <DatePicker
                onChange={onChange}
                value={value}
                onCalendarClose={changeHandler}
                calendarAriaLabel={"Toggle calendar"}
                calendarIcon={null}
                clearIcon={null}
                /*dayPlaceholder={``}
                monthPlaceholder={``}
                yearPlaceholder={``}*/
                name={name}
                showLeadingZeros={true}
            />
        </div>
    );
};

export default CustomDatePicker;
