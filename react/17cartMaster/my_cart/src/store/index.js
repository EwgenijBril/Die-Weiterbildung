import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducers/product';

const rootReducer = combineReducers({
    products: productReducer
});

export const store = createStore(rootReducer)