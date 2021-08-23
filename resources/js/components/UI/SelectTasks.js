import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch, useSelector} from "react-redux";
import {setFilterGames} from "../../reducers/gameReducer";

const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        width: '100%',
        fontFamily: 'Montserrat, sans-serif',
        color: 'white',
        '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl': {
            '& .MuiOutlinedInput-root:hover, & .MuiOutlinedInput-root, & .MuiOutlinedInput-notchedOutline': {
                borderColor: '#9a9fbe',
            }
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl:hover': {

            '& .MuiOutlinedInput-root:hover, & .MuiOutlinedInput-root, & .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            }
        },
        '& .MuiOutlinedInput-root:hover, & .MuiOutlinedInput-root, & .MuiOutlinedInput-notchedOutline': {
            borderColor: '#9a9a9a',
        },
        '& .MuiSelect-icon': {
            color: '#9a9a9a'
        },
        '& .Mui-focused': {
            color: '#9a9fbe',
        }
    },
    label: {
        borderColor: "white",
        color: 'white',
    },
    select: {
        color: 'white'
    }
}));

const options = [
    {value: 1, label: 'Steam'},
    {value: 2, label: 'Twitter'},
    {value: 3, label: 'Youtube'},
    {value: 4, label: 'Discord'},
    {value: 5, label: 'Facebook'},
    {value: 6, label: 'Instagram'},
    {value: 7, label: 'Reddit'},
    {value: 8, label: 'Website'},
]

const SelectTasks = ({handleTaskChange}) => {
    const classes = useStyles();
    const stateData = useSelector(state=>state.lang)
    const [state, setState] = React.useState({
        taskType: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        // console.log('handleChange name', name, value)
        setState({
            ...state,
            [name]: event.target.value,
        });
        handleTaskChange(value)
    }
    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
        >
            <InputLabel
                htmlFor="outlined-age-native-simple"
                className={classes.label}
            >
                {stateData.home.task[stateData.lang]}
            </InputLabel>
            <Select
                native
                value={state.age}
                onChange={handleChange}
                label={stateData.home.select_sort[stateData.lang]}
                className={classes.select}
                inputProps={{
                    name: 'taskType',
                    id: 'outlined-age-native-simple',
                }}
            >
                <option aria-label="None" value=""/>
                {options.map(option =>
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </option>
                )}
            </Select>
        </FormControl>
    );
};

export default SelectTasks;
