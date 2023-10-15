import { useSelector } from "react-redux";
import Post from "./Post/Post"

import useStyles from "./PostsStyle"
import { CircularProgress, Grid } from "@mui/material";


const Posts = (props) =>{
    const {classes} = useStyles();
    const {posts} = useSelector((state) => state.postReducer) // is brother of connect() for extracting data from state
    return(
        <>
            <h1 style={{color: "white"}}> Posts </h1>

            {

            posts.length === 0 ? <CircularProgress style={{ position:"relative", top: '30%', left: "50%"}}/> : (
                <Grid gap={3} container marginTop={3} className={classes.mainContainer}  alignItems="flex-start" >
                    {
                        posts.map( (item) => 
                        <Grid item key={item._id}> 
                            <Post id={item._id}
                                  creator={item.creator}
                                  title={item.title}
                                  likeCount={item.likeCount}
                                  message={item.message}
                                  selectedFile={item.selectedFile}
                                  tags={item.tags}
                                  createdAt={item.createdAt}
                                  setEditingPostId={props.setEditingPostId}
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