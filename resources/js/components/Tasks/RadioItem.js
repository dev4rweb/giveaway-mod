import React, {useState} from 'react';
import s from '../../../sass/components/UI/RadioItem.module.scss'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        position: 'absolute',
        top: '-5px',
        left: '-8px',
        opacity: 0,
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const RadioItem = ({option, selectedValue, handleChange, value}) => {
    const [state, setState] = useState(option.url)
    let checked = selectedValue == value

    const changeInput = (e) => {
        setState(e.target.value)
    };

    return (
        <div className={s.radioItem}>
            <GreenRadio
                checked={checked}
                onChange={handleChange}
                value={value}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
            />

            <div className={s.optionsContainer}>
                <div className={s.option}>
                    <div className={s.radioBtn}>
                        <span
                            style={{
                                backgroundColor: ` ${checked ? "#2b2f4c" : "#3d4266"} `
                            }}
                        />
                    </div>
                    <p className={s.optionTask}>
                        {option.task}
                    </p>

                    <input
                        type="text"
                        className="custom-input option-input"
                        placeholder="url"
                        value={state}
                        // onChange={(e) => setUrl(e.target.value)}
                        onChange={changeInput}
                    />
                </div>
            </div>
        </div>
    );
};

export default RadioItem;
