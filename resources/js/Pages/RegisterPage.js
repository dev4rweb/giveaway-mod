import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexDirection: 'column'
        },
    },
}));

const RegisterPage = () => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('email', email)
        console.log('password', password)

        const fd = new FormData();
        fd.set('name', name)
        fd.set('email', email)
        fd.set('password', password)
        fd.set('password_confirmation', passwordConfirm)


        axios.post('/register', fd)
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
        <div>
            <h1>Register Page</h1>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
            >

                <TextField
                    id="standard-basic-name"
                    label="Name"
                    type="text"
                    variant="outlined"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <TextField
                    id="standard-basic-email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    autoComplete="current-password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <TextField
                    id="standard-password-input-confirm"
                    label="Password"
                    type="password"
                    variant="outlined"
                    autoComplete="current-password"
                    value={passwordConfirm}
                    onChange={event => setPasswordConfirm(event.target.value)}
                />

                <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                >
                    Primary
                </Button>
            </form>
        </div>
    );
};

export default RegisterPage;
