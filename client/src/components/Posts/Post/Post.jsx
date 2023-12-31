import useStyles from "./PostStyle"
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // marerial-ui icons

import moment from 'moment'; // from libriary to fetch the current time
import { deletePostThunkCreator, likePostThunkCreator } from "../../../Redux/post-reducer";
import { useDispatch } from "react-redux";

const Post = (props) =>{
    const {classes} = useStyles();
    const dispatch = useDispatch()
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.selectedFile} title={props.title} />

            <div className={classes.overlay}>
                <Typography variant="h6">{props.creator}</Typography>
                <Typography variant="body2"> { moment(props.createdAt).fromNow() } </Typography>
            </div>

            <div className={classes.overlay2}>
                <Button style={{color:"white"}} size="small" onClick={() =>{ props.setEditingPostId(props.id)}}> <MoreHorizIcon  /> </Button>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color='textSecondary'>{props.tags.map( (item) => `# ${item} `)}</Typography>
            </div>

            <Typography className={classes.title} variant="h5" > {props.title} </Typography>

            <CardContent>
                <Typography variant="body2" color='textSecondary' className={classes.message} component="p" >{props.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{ dispatch(likePostThunkCreator(props.id)) }}> <ThumbUpAltIcon fontSize="small" /> &nbsp; Like {props.likeCount} </Button>
                <Button size="small" color="primary" onClick={ () => dispatch(deletePostThunkCreator(props.id))}> <DeleteIcon /> Delete</Button>
            </CardActions>

        </Card>
    )
}

export default Post