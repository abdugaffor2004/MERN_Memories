
import {AppBar, Container, Typography, Grow, Grid} from '@mui/material'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './AppStyle';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPostsThunkCreator } from './Redux/post-reducer';

function App() {
  const {classes} = useStyles();
  const dispatch = useDispatch()
  const [editingPostId, setEditingPostId] = useState();

  useEffect( () =>{
    dispatch(getPostsThunkCreator())
  }, [dispatch] )

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'> Memories </Typography>
        <img className={classes.image} height={60} src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' alt='logo' />
      </AppBar>

      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>

            <Grid item xs={12} sm={8}>
              <Posts setEditingPostId={setEditingPostId}/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form className={classes.form} editingPostId={editingPostId} setEditingPostId={setEditingPostId}/>
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
