import React, {useEffect} from 'react';
import s from "../../../sass/components/GameDescription.module.scss";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {useDispatch, useSelector} from "react-redux";
import {
    setModalTwitterViewPostAction,
    setModalVisitWebsiteAction,
    setVisitWebsiteDetailsAction
} from "../../reducers/modalReducer";
import {createUserTask} from "../../actions/userTask";
import GoogleLogin from "react-google-login";
import {createGoogleAccount} from "../../actions/googleUser";
import {setError} from "../../reducers/errorReducer";



const SwitchGameDescBtn = ({task, userTasks}) => {
    const dispatch = useDispatch()
    const stateData = useSelector(state => state.lang)
    const visible = useSelector(state => state.modal.modalGameDetails)
    const user = useSelector(state => state.user.user)
    let doneTask = userTasks.find(item => item.task_id == task.id)
    console.log('SwitchGameDescBtn', doneTask)
    console.log('SwitchGameDescBtn userTasks', userTasks)

    const checkWebsiteHandler = (e) => {
        // console.log('checkWebsiteHandler')
        dispatch(setModalVisitWebsiteAction(true))
        dispatch(setVisitWebsiteDetailsAction(task))
        // handleClick(event, task)
    };


    if (doneTask && doneTask.is_done == 1) {
        return (
            <button
                className={s.clipboard}
                disabled={true}
                style={{
                    textDecoration: "none",
                    color: "#60b95b"
                }}
            >
                {
                    stateData.home.done[stateData.lang]
                }
            </button>
        )
    }

    if (task.taskType === 3 && !user.google_user_data) {
        const responseGoogle = (response) => {
            console.log(response);
            const googleUser = {
                user_id: user.id,
                name: response.profileObj.name,
                email: response.profileObj.email,
                googleId: response.profileObj.googleId,
            }
            dispatch(createGoogleAccount(googleUser))
        }
        return (
                <GoogleLogin
                    clientId="1031122997941-euqhln98umjvsv62v60g7juejlf3t9vt.apps.googleusercontent.com"
                    buttonText="Login"
                    render={renderProps => (
                        <button
                            onClick={renderProps.onClick}
                            className={s.checkWebsite}
                            title={`In this task you will need to connect your Google Account`}
                            style={{fontSize: '20px'}}
                            // disabled={renderProps.disabled}
                        >
                            google auth
                        </button>
                    )}
                    className={s.loginGoogle}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
        )
    }

    if (task.taskType === 3 && user.google_user_data) {
        console.log('userData', user, task)
        let done = false
        const getAllComments = () => {
            const videoUrl = task.url.substr(32)
            const api_key = 'AIzaSyDH7whYUcUbVazRJOPrVrtd0s7m6M3lN-A'
            const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${api_key}&videoId=${videoUrl}&maxResults=100`

            axios.get(url)
                .then(res => {
                    console.log(res)
                    const comment = res.data.items.find(item =>
                        item.snippet.topLevelComment.snippet.authorDisplayName == user.google_user_data.name)
                    if (comment) {
                        console.log('done', comment);
                        dispatch(createUserTask({
                            user_id: user.id,
                            task_id: task.id,
                            is_done: 1
                        }))
                        done = true
                    } else {
                        console.log('not found', comment)
                    }
                })
                .catch(err => {
                    console.log(err)
                });
            return done
        };

        getAllComments();

        const addComment = e => {
            if (done) {
                dispatch(setError('This task is done'));
            } else {
                window.location.href = task.url;
            }
        };

        return (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={addComment}
            >
                {
                    done ? 'Done' : 'Add Comment'
                }
            </button>
        );
    }

    if (task.taskTypeId === 14) {
        // other fields
        /*https://developers.facebook.com/docs/sharing/reference/share-dialog*/
        const facebookSharePost = () => {
            doneTask = userTasks.find(item => item.task_id == task.id)
            console.log('task click', task)
            console.log('doneTask', doneTask)
            FB.init({
                appId: '260240649373300',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v12.0'
            });
            FB.ui({
                method: 'share',
                href: task.url
            }, function (response) {
                if (response && !response.error_message) {
                    alert('Posting completed.');
                    const userTask = {
                        user_id: user.id,
                        task_id: task.id,
                        is_done: 1
                    }
                    dispatch(createUserTask(userTask))
                } else {
                    alert('Error while posting.');
                }
            });
        };
        return (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={event => facebookSharePost()}
            >
                Share
            </button>
        );
    }

    if (task.task.toLowerCase().includes('check website')) {
        return (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={event => checkWebsiteHandler(event)}
            >
                {
                    stateData.home.plus_one[stateData.lang]
                }
            </button>
        );
    }

    if (task.task.toLowerCase().includes('view post')) {
        const twitterViewPostHandler = e => {
            dispatch(setModalTwitterViewPostAction(true))
        };
        return (
            <button
                className={`${s.checkWebsite}`}
                style={{fontSize: '20px'}}
                onClick={event => twitterViewPostHandler(event)}
            >
                {
                    stateData.home.plus_one[stateData.lang]
                }
            </button>
        );
    }

    return (
        <CopyToClipboard text={task.url}>
            <button
                className={s.clipboard}>
                {
                    stateData.home.copy[stateData.lang]
                }
            </button>
        </CopyToClipboard>
    );
};

export default SwitchGameDescBtn;
