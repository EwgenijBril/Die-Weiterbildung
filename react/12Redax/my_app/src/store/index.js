import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers/userReducer'
import { postReducer } from './reducers/postReducer'

const rootReducer =combineReducers({
    user: userReducer,
    post: postReducer
})

export const store = createStore(rootReducer)