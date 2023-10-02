
let intialState = {
    posts: [],
}

const postReducer = (state = intialState, action) =>{
    switch(action.type){
        case 'FETCH_ALL': 
            return state.posts

        case 'CREATE': 
            return state.posts

        default:
            return state
    }
}

export default postReducer