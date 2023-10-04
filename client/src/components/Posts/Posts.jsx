import { useSelector } from "react-redux";
import Post from "./Post/Post"

import useStyles from "./PostsStyle"
import { CircularProgress, Grid } from "@mui/material";


const Posts = () =>{
    const {classes} = useStyles();
    const {posts} = useSelector((state) => state.post) // is brother of connect() for extracting data from state
    console.log(posts)
    return(
        <>
            <h1> Posts </h1>

            {

            posts.length === 0 ? <CircularProgress style={{position: "absolute", top: '50%', left: "30%"}}/> : (
                <Grid marginTop={3} className={classes.mainContainer}  alignItems="stretch" gap={3}>
                    {
                        posts.map( (item) => 
                        <Grid key={item._id} xs={12} sm={6} > 
                            <Post id={item._id}
                                  creator={item.creator}
                                  title={item.title}
                                  likeCount={item.likeCount}
                                  message={item.message}
                                  selectedFile={item.selectedFile}
                                  tags={item.tags}
                                  createdAt={item.createdAt}
                                  /> 
                                  
                        </Grid>  )
                    }
                </Grid>
            )
            

            }
            
        </>
        
    )
}

export default Posts