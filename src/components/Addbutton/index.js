import React, { useState } from 'react';
import './style.css';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import InputItem from '../InputItem';

const Addbutton = ({ saveItem }) => {
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
      <div className="addbutton">
        <Button onClick={handleClick}>
          +
      </Button>
      </div>
      <div className="popover">
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 200,
            horizontal: -30,
          }}
        >
          <InputItem saveItem={saveItem} />
        </Popover>
      </div>
    </div>
  );
}

export default Addbutton;