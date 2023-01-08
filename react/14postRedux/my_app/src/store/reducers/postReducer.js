import { posts_data } from "../../data/posts";

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_COMMENT = 'ADD_COMMENT'

export const addPost = payload => ({ type: ADD_POST, payload });
export const deletePost = payload => ({ type: DELETE_POST, payload });
export const addComment = payload => ({ type: ADD_COMMENT, payload });


export const postReducer = ( state = posts_data, action) => {
    if ( action.type === ADD_POST ) {
        return [...state, {
            id: Date.now(),
            ...action.payload
        }]
    } else if (action.type === DELETE_POST ) {
        return state.filter( el => el.id !== action.payload )
    } else if (action.type === ADD_COMMENT ) {
        const finded = state.find((el) => el.id === action.payload.post_id);
        const newComment = {
          id: Date.now(),
          comment: action.payload.comment,
        };
        finded.comments.push(newComment);
        return [...state];
    } else {
       return state
    } 


  
    
    
}

