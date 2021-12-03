import React from 'react';
import { fabClasses, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import OpenLink from '../Practice/OpenLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center'
    },
    title: {
      backgroundColor: 'red',
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
    </div>
  )
};

export default WelcomePage;