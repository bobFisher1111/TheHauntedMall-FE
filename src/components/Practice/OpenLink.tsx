import React from 'react';
import Button from '@mui/material/Button';

const OpenLink = () => {
  const onClickIGN = () => {
    window.open("https://www.ign.com","_self");
  };
  
  return (
    <>
      <Button variant="contained" onClick={onClickIGN}>
      Contained
      </Button>
    </>
  )
};

export default OpenLink;