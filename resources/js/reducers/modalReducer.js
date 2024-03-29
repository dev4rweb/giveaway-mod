const SET_MODAL_IS_AUTH = 'SET_MODAL_IS_AUTH'
const SET_MODAL_GAME_DESCRIPTION = 'SET_MODAL_GAME_DESCRIPTION'
const SET_GAME_DESCRIPTION = 'SET_GAME_DESCRIPTION'
const SET_MODAL_KEY = 'SET_MODAL_KEY'
const SET_MODAL_AUTH = 'SET_MODAL_AUTH'
const SET_MODAL_REGISTER = 'SET_MODAL_REGISTER'
const SET_EDIT_PAGE = 'SET_EDIT_PAGE'
const SET_MODAL_DRAW_WINNER = 'SET_MODAL_DRAW_WINNER'
const SET_MODAL_GAME_DETAILS = 'SET_MODAL_GAME_DETAILS'
const SET_VISIT_SITE_DETAILS = 'SET_VISIT_SITE_DETAILS'
const CLICK_CHECK_WEBSITE = 'CLICK_CHECK_WEBSITE'
const SET_MODAL_TWITTER_VIEW_POST = 'SET_MODAL_TWITTER_VIEW_POST'

const defaultState = {
    modalIsAuth: false,
    modalGameDescription: false,
    gameDescription: null,
    modalKey: false,
    modalAuth: false,
    modalRegister: false,
    editPage: false,
    modalDrawWinner: false,
    modalGameDetails: false,
    checkWebsiteDetails: null,
    checkWebsiteClick: false,
    modalTwitterViewPost: false
}

export default function modalReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_MODAL_IS_AUTH:
            return {
                ...state,
                modalIsAuth: action.payload
            }
        case SET_MODAL_GAME_DESCRIPTION:
            return {
                ...state,
                modalGameDescription: action.payload
            }
        case SET_GAME_DESCRIPTION:
            return {
                ...state,
                gameDescription: action.payload
            }
        case SET_MODAL_KEY:
            return {
                ...state,
                modalKey: action.payload
            }
        case SET_MODAL_AUTH:
            return  {
                ...state,
                modalAuth: action.payload
            }
        case SET_MODAL_REGISTER:
            return {
                ...state,
                modalRegister: action.payload
            }
        case SET_EDIT_PAGE:
            return {
                ...state,
                editPage: action.payload
            }
        case SET_MODAL_DRAW_WINNER:
            return {
                ...state,
                modalDrawWinner: action.payload
            }
        case SET_MODAL_GAME_DETAILS:
            return {
                ...state,
                modalGameDetails: action.payload
            }
        case SET_VISIT_SITE_DETAILS:
            return {
                ...state,
                checkWebsiteDetails: action.payload
            }
        case CLICK_CHECK_WEBSITE:
            return {
                ...state,
                checkWebsiteClick: action.payload
            }
        case SET_MODAL_TWITTER_VIEW_POST:
            return {
                ...state,
                modalTwitterViewPost: action.payload
            }
        default:
            return state
    }
};

export const setIsAuthModalOpen = (isOpen) => ({type: SET_MODAL_IS_AUTH, payload: isOpen})
export const setModalGameDescription = (isOpen) => ({type: SET_MODAL_GAME_DESCRIPTION, payload: isOpen})
export const setGameDescription = (item) => ({type: SET_GAME_DESCRIPTION, payload: item})
export const setModalKey = (isOpen) => ({type: SET_MODAL_KEY, payload: isOpen})
export const setModalAuth = (isOpen) => ({type: SET_MODAL_AUTH, payload: isOpen})
export const setModalRegister = (isOpen) => ({type: SET_MODAL_REGISTER, payload: isOpen})
export const setEditPage = (isOpen) => ({type: SET_EDIT_PAGE, payload: isOpen})
export const setModalDrawWinner = (isOpen) => ({type: SET_MODAL_DRAW_WINNER, payload: isOpen})
export const setModalVisitWebsiteAction = isOpen => ({type: SET_MODAL_GAME_DETAILS, payload: isOpen})
export const setVisitWebsiteDetailsAction = item => ({type: SET_VISIT_SITE_DETAILS, payload: item})
export const checkWebsiteClickAction = isClick => ({type: CLICK_CHECK_WEBSITE, payload: isClick})
export const setModalTwitterViewPostAction = isOpen => ({type: SET_MODAL_TWITTER_VIEW_POST, payload: isOpen})
