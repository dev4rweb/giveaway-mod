const FETCH_ALL_GIFTS = 'FETCH_ALL_GIFTS'
const ADD_GIFT = 'ADD_GIFT'
const UPDATE_GIFT = 'UPDATE_GIFT'
const REMOVE_GIFT = 'REMOVE_GIFT'

const defaultState = {
    gifts: [],
}

export default function giftReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_ALL_GIFTS:
            return {
                ...state,
                gifts: action.payload
            }
        case ADD_GIFT:
            return {
                ...state,
                gifts: [...state.gifts, action.payload]
            }
        case UPDATE_GIFT:
            const tempArray = state.gifts.filter(gift => gift.id !== action.payload.id)
            return {
                ...state,
                gifts: [
                    ...tempArray,
                    action.payload
                ]
            }
        case REMOVE_GIFT:
            return {
                ...state,
                gifts: state.gifts.filter(gift => gift.id !== action.payload)
            }
        default:
            return state
    }
};

export const fetchAllGifts = (gifts) => ({type: FETCH_ALL_GIFTS, payload: gifts})
export const addGiftAction = (gift) => ({type: ADD_GIFT, payload: gift})
export const updateGiftAction = (gift) => ({type: UPDATE_GIFT, payload: gift})
export const removeGiftAction = (id) => ({type: REMOVE_GIFT, payload: id})
