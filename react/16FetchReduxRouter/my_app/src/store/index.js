import { createStore, combineReducers } from 'redux'
import { categoriesReducer } from './reducers/categories';

const rootReducer = combineReducers({
    categories: categoriesReducer

});

export const store = createStore(rootReducer)