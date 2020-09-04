import React, { useState } from 'react';
import './style.css';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import InputNewList from '../InputNewList';

const NewListButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <MenuItem onClick={handleClick}>Nueva Lista</MenuItem>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: -150,
          horizontal: 35,
        }}
      >
       <InputNewList/>
      </Popover>
    </div>
  )
}
export default NewListButton;


