import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';


const OpenDownMenu = ({ listas }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <button className="openDown-btn">
          <i class="fas fa-chevron-down"></i>
        </button>
        .
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 50,
        }}
        transformOrigin={{
          vertical: -40,
          horizontal: 'right',
        }}>

        {listas.length === 0 ?
          <MenuItem onClick={handleClose}>No hay listas creadas aun</MenuItem>
          :
          <div>
            {listas.map((item, index) => (
              <MenuItem onClick={handleClose}>{item.nombrelista}</MenuItem>
            ))}
          </div>
        }

      </Menu>
    </div>
  )
}
export default OpenDownMenu;





