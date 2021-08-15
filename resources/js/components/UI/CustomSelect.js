import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        fontFamily: 'Montserrat, sans-serif',
        color: 'white',
        '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl': {
            '& .MuiOutlinedInput-root:hover, & .MuiOutlinedInput-root, & .MuiOutlinedInput-notchedOutline': {
                borderColor: '#9a9fbe',
            }
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl:hover':{

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

const CustomSelect = () => {
    const [age, setAge] = React.useState('');
    const classes = useStyles();

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(age)
    };

    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
        >
            <InputLabel
                htmlFor="outlined-age-native-simple"
                className={classes.label}
            >
                Sort
            </InputLabel>
            <Select
                native
                value={age}
                onChange={handleChange}
                label="Sort"
                className={classes.select}
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
            >
                <option aria-label="None" value="" />
                <option value={10}>All</option>
                <option value={20}>Competition</option>
                <option value={30}>Giveaways</option>
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
