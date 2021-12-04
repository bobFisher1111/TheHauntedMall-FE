import React from 'react';
import { Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      backgroundColor: '#b0bec5',
      padding: '30px'
    },
    title: {
      color: '#092509',
      paddingTop: '30px',
      paddingBottom: '30px',
    },
  }),
);


const Profile = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h4"
        className={classes.title}
      >
        New Game
      </Typography>
      <Typography
        variant="h4"
        className={classes.title}
      >
        Load Game
      </Typography>
      <Typography
        variant="h4"
        className={classes.title}
      >
        Settings
      </Typography>
      <Typography
        variant="h4"
        className={classes.title}
      >
        Quit
      </Typography>
    </div>
  )
};

export default Profile;
