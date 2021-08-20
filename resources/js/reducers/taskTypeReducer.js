const SET_TASK_TYPE_ONE = 'SET_TASK_TYPE_ONE'
const SET_TASK_TYPE_TWO = 'SET_TASK_TYPE_TWO'
const SET_TASK_TYPE_THREE = 'SET_TASK_TYPE_THREE'

const defaultState = {
    actionType: 0,
    taskOne: null,
    taskTwo: null,
    taskThree: null,
    tasks: [
        /*steam*/
        {id: 1, taskType: 1, task: 'Add game to wishlist', url: 'https://www.steam.com'},
        {id: 2, taskType: 1, task: 'Join to the group', url: 'https://www.steam.com'},
        {id: 3, taskType: 1, task: 'Follow group', url: 'https://www.steam.com'},
        /*twitter*/
        {id: 4, taskType: 2, task: 'follow', url: 'https://www.twitter.com'},
        {id: 5, taskType: 2, task: 'Like', url: 'https://www.twitter.com'},
        {id: 6, taskType: 2, task: 'repost', url: 'https://www.twitter.com'},
        {id: 7, taskType: 2, task: 'post', url: 'https://www.twitter.com'},
        /*youtube*/
        {id: 8, taskType: 3, task: 'Watch the video', url: 'https://www.youtube.com'},
        {id: 9, taskType: 3, task: 'Like', url: 'https://www.youtube.com'},
        {id: 10, taskType: 3, task: 'comment', url: 'https://www.youtube.com'},
        {id: 11, taskType: 3, task: 'Subscribe', url: 'https://www.youtube.com'},
        /*discord*/
        {id: 12, taskType: 4, task: 'Join the server', url: 'https://www.discord.com'},
        /*facebook*/
        {id: 13, taskType: 5, task: 'Like post', url: 'https://www.facebook.com'},
        {id: 14, taskType: 5, task: 'Share post', url: 'https://www.facebook.com'},
        {id: 15, taskType: 5, task: 'Like fanpage', url: 'https://www.facebook.com'},
        {id: 16, taskType: 5, task: 'comment post', url: 'https://www.facebook.com'},
        /*instagram*/
        {id: 17, taskType: 6, task: 'Like photo', url: 'https://www.instagram.com'},
        {id: 18, taskType: 6, task: 'comment', url: 'https://www.instagram.com'},
        {id: 19, taskType: 6, task: 'share', url: 'https://www.instagram.com'},
        /*reddit*/
        {id: 20, taskType: 7, task: 'join group', url: 'https://www.reddit.com'},
        {id: 21, taskType: 7, task: 'Give upvote', url: 'https://www.reddit.com'},
        /*website*/
        {id: 22, taskType: 8, task: 'Check website', url: 'https://www.website.com'},
    ]
}

export default function taskTypeReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TASK_TYPE_ONE:
            return {
                ...state,
                taskOne: state.tasks.filter(item => item.taskType == action.payload)
            }
        case SET_TASK_TYPE_TWO:
            return {
                ...state,
                taskTwo: state.tasks.filter(item => item.taskType == action.payload)
            }
        case SET_TASK_TYPE_THREE:
            return {
                ...state,
                taskThree: state.tasks.filter(item => item.taskType == action.payload)
            }
        default:
            return state
    }
};

export const setTaskOne = (taskType) => ({type: SET_TASK_TYPE_ONE, payload: taskType})
export const setTaskTwo = (taskType) => ({type: SET_TASK_TYPE_TWO, payload: taskType})
export const setTaskThree = (taskType) => ({type: SET_TASK_TYPE_THREE, payload: taskType})
