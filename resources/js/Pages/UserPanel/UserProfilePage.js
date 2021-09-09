import React, {useState} from 'react';
import '../../../sass/pages/userPage.scss'
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {updateUser} from "../../actions/users";
import {setUserPageUserAction} from "../../reducers/userPageReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
    },
    input: {
        '& input, label': {
            color: 'white',
            fontFamaly: 'Montserrat, sans-serif'
        },
        '& label.Mui-focused': {
            color: '#9a9a9a',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#9a9a9a',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#b6c4d2',
            },
            '&:hover fieldset': {
                borderColor: '#9a9fbe',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#9a9a9a',
            },
        },
    },
    cbx: {
        color: 'white',
        '&$checked': {
            color: 'white',
        },
        '& .MuiCheckbox-root': {
            color: 'white'
        }
    },
    button: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        // backgroundColor: '#0063cc',
        borderColor: '#fdfdfd',
        color: '#fdfdfd',
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        '&:hover': {
            // backgroundColor: '#0069d9',
            borderColor: '#6f7bb6',
            color: '#6f7bb6',
            // boxShadow: 'none',
        },
        /*'&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },*/
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    }
}));

const UserProfilePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const currentUser = useSelector(state => state.userPage.user)
    const [name, setName] = useState(currentUser.name)
    // console.log('UserProfilePage', currentUser)

    const submitHandler = ev => {
        ev.preventDefault()
        // console.log('submitHandler', name)
        const user = currentUser
        user.name = name
        dispatch(updateUser(user))
        dispatch(setUserPageUserAction(user))
    }

    return (
        <div className={`container user-page`}>
            <div className="title-wrapper">
                <p className="admin-title">| {stateData.admin.mainProfile[stateData.lang]}</p>
                <hr/>
            </div>

            <div>
                <p>Your email: {currentUser.email}</p>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={submitHandler}
                >
                    <TextField
                        id="standard-password-input"
                        label="Name"
                        type="text"
                        className={classes.input}
                        variant="outlined"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <Button
                        variant="outlined"
                        // color="primary"
                        className={classes.button}
                        type="submit"
                    >
                        Change Name
                    </Button>

                    {/*</ThemeProvider>*/}
                </form>
            </div>
        </div>
    );
};

export default UserProfilePage;
