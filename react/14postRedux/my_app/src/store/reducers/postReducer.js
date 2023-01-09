import { posts_data } from "../../data/posts";

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export const addPost = payload => ({ type: ADD_POST, payload });
export const deletePost = payload => ({ type: DELETE_POST, payload });
export const addComment = payload => ({ type: ADD_COMMENT, payload });
export const deleteComment = payload => ({ type: DELETE_COMMENT, payload})


export const postReducer = ( state = posts_data, action) => {
    if ( action.type === ADD_POST ) {
        return [...state, {
            id: Date.now(),
            ...action.payload
        }]
    } else if (action.type === DELETE_POST ) {
        return state.filter( el => el.id !== action.payload )
    } else if (action.type === ADD_COMMENT ) {
        const target_state = state.find(el => el.id === action.payload.post_id);
        const newComment = {
          id: Date.now(),
          comment: action.payload.comment,
        };
        target_state.comments.push(newComment);
        return [...state];
    } else if ( action.type === DELETE_COMMENT ) {
        const target_state = state.find(el => el.id === action.payload.post_id);
        target_state.comments = target_state.comments.filter(el => el.id !== action.payload.id);
        return [...state]
    } else {
        return state
    }

    // const delete_comment = (post_id, comment_id) => {
    //     const target_post = posts.find(el => el.id === post_id);
    //     target_post.comments = target_post.comments.filter(el => el.id !== comment_id);
    //     setPost([...posts])
    //   }

   
  
    
    
}

