import React from 'react';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#092509',
    },
  }),
);

const OpenLink = () => {

  const classes = useStyles();

  const onClickIGN = () => {
    window.open("https://www.ign.com","_self");
  };
  
  return (
    <div >
      <Button 
        className={classes.root}
        variant="outlined" 
        onClick={onClickIGN}
        color="success"
      >
        Sign In
      </Button>
    </div>
  )
};

export default OpenLink;