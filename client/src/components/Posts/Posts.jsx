import { shallowEqual, useSelector } from "react-redux";
import Post from "./Post/Post"

import useStyles from "./PostsStyle"


const Posts = () =>{
    const {classes} = useStyles();
    const posts = useSelector((state) => state.post) // is brother of connect() for extracting data from state
    return(
        <>
            <h1> Posts </h1>
            <Post />
            <Post />
        </>
        
    )
}

export default Posts