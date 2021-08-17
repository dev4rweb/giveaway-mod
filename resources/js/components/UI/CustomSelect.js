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
        margin: theme.spacing(1),
        minWidth: 120,
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

const CustomSelect = () => {
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.games.games)
    const stateData = useSelector(state=>state.lang)
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        // console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.value
        setState({
            ...state,
            [name]: event.target.value,
        });
        switch (value) {
            case '10':
                // console.log('handleChange 10')
                dispatch(setFilterGames(allGames))
                break
            case '20':
                // console.log('handleChange 20')
                dispatch(setFilterGames(allGames.filter(item => item.isCompetition)))
                break
            case '30':
                // console.log('handleChange 30')
                dispatch(setFilterGames(allGames.filter(item => !item.isCompetition)))
                break
        }
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
                {stateData.home.select_sort[stateData.lang]}
            </InputLabel>
            <Select
                native
                value={state.age}
                onChange={handleChange}
                label={stateData.home.select_sort[stateData.lang]}
                className={classes.select}
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
            >
                <option aria-label="None" value=""/>
                <option value={10}>{stateData.home.select_all[stateData.lang]}</option>
                <option value={20}>{stateData.home.select_comp[stateData.lang]}</option>
                <option value={30}>{stateData.home.select_give[stateData.lang]}</option>
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
