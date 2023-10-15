import { postsApi } from "../api/api"

const SET_POSTS = "SET-POSTS";
const FETCH_ALL = "FETCH-ALL";
const UPDATE_POST = "UPDATE-POST";
const DELETE_POST = "DELETE-POST";


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

        case UPDATE_POST: 

            return {
                ...state,
                posts: state.posts.map( (post) => post._id === action.updatedPost._id ? action.updatedPost : state.posts )
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter( (post) => post._id !== action.idForDeleting)
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

export const updatePostAC = (updatedPost) =>{
    return {type: UPDATE_POST, updatedPost}
}

export const deletePostAC = (idForDeleting) =>{
    return {type: DELETE_POST, idForDeleting}
}


export const getPostsThunkCreator = () => (dispatch) =>{
    
    postsApi.getPosts().then( (response) => {console.log(response); dispatch(fetchAllAC(response));} )
}

export const createPostThunkCreator = (formData) => (dispatch) =>{
    
    postsApi.createPost(formData).then( (response) => dispatch(setPostsAC(response)) )
    
}


export const updatedPostThunkCreator = (id ,updatedPostData) => (dispatch) =>{
    postsApi.updatePost(id, updatedPostData).then( (response) => dispatch(updatePostAC(response)) )
}

export const deletePostThunkCreator = (id) => async (dispatch) =>{
    postsApi.deletePost(id).then( (response) => {
        if(response.status === 200){
            dispatch(deletePostAC(id))
        }
    })
}

export const likePostThunkCreator = (id) => async (dispatch) =>{
    postsApi.likePost(id).then( (response) => dispatch( updatePostAC(response) ) )
}