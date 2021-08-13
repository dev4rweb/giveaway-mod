import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

const AuthPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(false)

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
                }
            })
            .catch(err => {
                console.log(err.response.data)
            });
    };

    return (
        <div className="container">
            <h1>Auth Page </h1>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={submitHandler}
            >
                <TextField
                    id="standard-basic"
                    label="Standard"
                    name="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isRemember}
                            onChange={event => setIsRemember(event.target.checked)}
                            name="remember"
                            color="primary"
                        />
                    }
                    label="Remember me"
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

export default AuthPage;
