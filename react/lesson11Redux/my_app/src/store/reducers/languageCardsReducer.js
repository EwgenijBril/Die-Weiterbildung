const defaultState = [];

const ADD_CARD = 'ADD_CARD'

export const addCard = payload => ({ type: ADD_CARD, payload })

export const languageCardsReducer = ( state = defaultState, action) => {
    if (action.type ===  ADD_CARD) {
        return [...state, {
            id: Date.now(),
            ...action.payload
        }]
    } else {
        return state 
    }
}