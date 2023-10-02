import './App.css';
import {AppBar, Container, Typography, Grow, Grid} from '@mui/material'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './AppStyle';

function App() {
  const {classes} = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'> Memories </Typography>
        <img className={classes.image} height={60} src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' alt='logo' />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>

            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
