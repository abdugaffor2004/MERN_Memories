import { postsApi } from "../api/api"

const SET_POSTS = "SET-POSTS"
const FETCH_ALL = "FETCH-ALL"

let intialState = {
    posts: [],
}

const postReducer = (state = intialState, action) =>{
    switch(action.type){

        case FETCH_ALL: 
        return {
            ...state,
            posts: action.payload
        }

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

export const fetchAllAC = (payload) =>{
    return {type: FETCH_ALL, payload}
}

export const setPostsAC = (posts) =>{
    return {type: SET_POSTS, posts}
}

export const getPostsThunkCreator = () => (dispatch) =>{
    
    postsApi.getPosts().then( (response) => {console.log(response); dispatch(fetchAllAC(response));} )
}

export const createPostThunkCreator = (formData) => (dispatch) =>{
    postsApi.createPost(formData).then( (response) => dispatch(setPostsAC(response)) )
}