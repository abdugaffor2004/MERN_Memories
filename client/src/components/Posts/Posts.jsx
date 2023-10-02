import Post from "./Post/Post"

import useStyles from "./PostsStyle"

const Posts = () =>{
    const {classes} = useStyles();
    return(
        <>
            <h1> Posts </h1>
            <Post />
            <Post />
        </>
        
    )
}

export default Posts