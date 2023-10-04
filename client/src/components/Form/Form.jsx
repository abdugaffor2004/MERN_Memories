import { Button, Paper, TextField, Typography } from '@mui/material';
import FileBase from "react-file-base64"
import  useStyles  from './FormStyle'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { createPostThunkCreator } from '../../Redux/post-reducer';

const Form = () =>{
    const {classes} = useStyles();
    const [FormData, setFormData] = useState({creator:"", title:"", message:"", tags:"", selectedFile:""});
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()

        dispatch(createPostThunkCreator(FormData))
    }

    const clear = () =>{
        
    }

    return(
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} >
                <Typography variant='h6'> Creating Memory </Typography>

                <TextField name='creator' variant='outlined' label="Creator" 
                    fullWidth 
                    value={FormData.creator} 
                    onChange={(e) => setFormData({...FormData, creator: e.target.value})}/>

                <TextField name='title' variant='outlined' label="Title"
                    fullWidth
                    value={FormData.title}
                    onChange={(e) => setFormData({...FormData, title: e.target.value})} /> 

                <TextField name='message' variant='outlined' label="Message"
                    fullWidth
                    value={FormData.message}
                    onChange={ (e) => setFormData({...FormData, message: e.target.value}) }/>   

                <TextField name='tags' variant='outlined' label="Tags"
                    fullWidth
                    value={FormData.tags}
                    onChange={ (e) => setFormData({...FormData, tags: e.target.value}) }/>   

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={ ({base64}) => setFormData({...FormData, selectedFile: base64}) } />
                </div>

                
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button variant='contained' color='error' size='small' onClick={clear} fullWidth >Clear</Button>
                
                
            </form>
        </Paper>
    )
}

export default Form