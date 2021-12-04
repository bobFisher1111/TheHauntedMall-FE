import React from 'react';
import { Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import OpenLink from '../Practice/OpenLink';
import Profile from '../Profile/Profile';

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


const WelcomePage = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        className={classes.title}
      >
        The Haunted Mall: Video Game
      </Typography>
      <OpenLink />
      <Profile />
    </div>
  )
};

export default WelcomePage;