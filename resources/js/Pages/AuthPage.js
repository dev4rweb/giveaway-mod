import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {InertiaLink} from "@inertiajs/inertia-react";


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

const AuthPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(false)

    const registerHandler = (e) => {
        console.log('registerHandler')
    };

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('email', email)
        console.log('password', password)
        console.log('isRemember', isRemember)

        const fd = new FormData();
        fd.set('email', email)
        fd.set('password', password)
        fd.set('remember', isRemember)

        axios.post('/login', fd)
            .then(res => {
                console.log(res)
                if (res.status === 204) {
                    console.log('You are logged in')
                    document.location.reload()
                }
            })
            .catch(err => {
                console.log(err.response.data)
            });
    };

    return (
        <div
            className="container"
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <h1><InertiaLink href="/">Giveaway</InertiaLink></h1>
            <h3>Auth</h3>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
            >
                {/*<ThemeProvider theme={theme}>*/}
                <TextField
                    id="standard-basic"
                    className={classes.input}
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    className={classes.input}
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <FormControlLabel
                    className={classes.cbx}
                    control={
                        <Checkbox
                            checked={isRemember}
                            onChange={event => setIsRemember(event.target.checked)}
                            name="remember"
                            // color="primary"
                        />
                    }
                    label="Remember me"
                />

                <Button
                    variant="outlined"
                    // color="primary"
                    className={classes.button}
                    type="submit"
                >
                    Login
                </Button>

                {/*</ThemeProvider>*/}
            </form>
            <InertiaLink
                href={'/register'}
            >
                or Register
            </InertiaLink>
        </div>
    );
};

export default AuthPage;
