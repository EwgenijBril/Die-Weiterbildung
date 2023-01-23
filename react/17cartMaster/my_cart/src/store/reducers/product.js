const defaultStete = [];

const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = payload => ({ type: ADD_PRODUCT, payload });

export const productReducer = ( state = defaultStete, action ) => {
    if ( action.type === ADD_PRODUCT) {
        return [...state, action.payload]
    } else {
        return state 
    }
}