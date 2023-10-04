import { postsApi } from "../api/api"

const SET_POSTS = "SET-POSTS"

let intialState = {
    posts: [],
}

const postReducer = (state = intialState, action) =>{
    switch(action.type){
        case SET_POSTS: 
            return {
                ...state,
                posts: [...state.posts, action.posts]
            }


        default:
            return state
    }
}

export default postReducer


export const setPostsAC = (posts) =>{
    return {type: SET_POSTS, posts}
}

export const getPostsThunkCreator = () => (dispatch) =>{
    postsApi.getPosts().then( (response) => dispatch(setPostsAC(response)) )
}

export const createPostThunkCreator = (formData) => (dispatch) =>{
    postsApi.createPost(formData).then( (response) => dispatch(setPostsAC(response)) )
}