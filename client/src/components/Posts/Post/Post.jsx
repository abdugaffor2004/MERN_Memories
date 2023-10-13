import useStyles from "./PostStyle"
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // marerial-ui icons

import moment from 'moment'; // from libriary to fetch the current time

const Post = (props) =>{
    const {classes} = useStyles();
    
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

            <CardContent>
                <Typography className={classes.message} variant="p" gutterBottom>{props.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{}}> <ThumbUpAltIcon fontSize="small" /> Like {props.likeCount} </Button>
                <Button size="small" color="primary" onClick={()=>{}}> <DeleteIcon /> Delete</Button>
            </CardActions>

        </Card>
    )
}

export default Post