import React, {useState} from 'react';
import '../../../sass/pages/userPage.scss'
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {updateUser} from "../../actions/users";
import {setUserPageUserAction} from "../../reducers/userPageReducer";
import { FacebookProvider, LoginButton, Profile, Page, EmbeddedPost  } from 'react-facebook';

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
            fontFamily: 'Montserrat, sans-serif'
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
    const [dataFB, setDataFB] = useState(null)
    // console.log('UserProfilePage', currentUser)

    const submitHandler = ev => {
        ev.preventDefault()
        // console.log('submitHandler', name)
        const user = currentUser
        user.name = name
        dispatch(updateUser(user))
        dispatch(setUserPageUserAction(user))
    }

    const facebookClick = ev => {
        const fakeButton = document.querySelector('.ulogin-button-facebook')
        console.log('facebookClick')
        console.log('facebookClick', fakeButton)
        if (fakeButton) fakeButton.click()
    };

    const handleResponse = (data) => {
        console.log(data);
        setDataFB(data.profile)
    }

    const handleError = (error) => {
        console.log(error)
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

            {/*            <Button
                variant="outlined"
                // color="primary"
                className={classes.button}
                onClick={facebookClick}
                type="button"
            >
                Facebook
            </Button>*/}

            {/*{
                currentUser.social_ulogins.length > 0
                && currentUser.social_ulogins.map((item, index) => {
                    const firstName = item.first_name
                    const last_name = item.last_name
                    const email = item.email
                    const nickname = item.nickname
                    const bdate = item.bdate
                    const sex = item.sex
                    const phone = item.phone
                    const photo = item.photo
                    const photo_big = item.photo_big
                    const city = item.city
                    const country = item.country

                    const network = item.network
                    const profile = item.profile
                    const verified_email = item.verified_email
                    return (
                        <ol key={index}>
                            {network && <li>Social: {network} </li>}
                            {firstName && <li>First Name: {firstName} </li>}
                            {last_name && <li>Last Name: {last_name} </li>}
                            {email && <li>Email: {email} </li>}
                            {nickname && <li>Nickname: {nickname} </li>}
                            {bdate && <li>Birthday: {bdate} </li>}
                            {sex && <li>Gender: {sex == 2 ? 'male' : 'female'} </li>}
                            {phone && <li>Phone: {phone} </li>}
                            {photo && <li>Avatar: {photo} </li>}
                            {photo_big && <li>Big Photo: {photo_big} </li>}
                            {city && <li>City: {city} </li>}
                            {country && <li>Country: {country} </li>}

                            {profile && <li><a href={profile}>profile link</a> </li>}
                            {verified_email && <li>verified email: {verified_email == 1 ? 'verified' : 'NOT verified'} </li>}

                        </ol>
                    )
                })
            }*/}

            <div>
                {/*https://www.npmjs.com/package/react-facebook*/}
                {/*https://developers.facebook.com/apps/162919759328231/app-review/permissions/*/}
                <FacebookProvider appId="162919759328231">
                    <LoginButton
                        scope="email, public_profile"
                        onCompleted={handleResponse}
                        onError={handleError}
                    >
                        <span>Facebook</span>
                    </LoginButton>
                </FacebookProvider>

            </div>

            {
                dataFB &&
                <ol>
                    <li>Email - {dataFB.email ?? 'undefined'}</li>
                    <li>Name - {dataFB.first_name ?? 'undefined'}</li>
                    <li>Last Name - {dataFB.last_name ?? 'undefined'}</li>
                    <li>Full Name - {dataFB.name ?? 'undefined'}</li>
                    <li>
                        Avatar - <br/>
                        {
                            dataFB.picture ?
                                <img
                                    src={dataFB.picture.data.url}
                                    width={dataFB.picture.data.width}
                                    height={dataFB.picture.data.height}
                                    alt="avatar"
                                />
                                :
                                "User hasn't avatar"
                        }
                    </li>
                </ol>
            }
        </div>
    );
};

export default UserProfilePage;
