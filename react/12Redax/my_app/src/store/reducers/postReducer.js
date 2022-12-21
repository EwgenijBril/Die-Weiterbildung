const defaultState = []
const ADD_POST = 'ADD_POST'

export const addPost = payload => ({ type: ADD_POST, payload })

export const postReducer = (state = defaultState, action) => {
    if (action.type ===  ADD_POST) {
        return [...state, {
            id: Date.now(),
            ...action.payload
        }]
    } else {
        return state
    }

}
