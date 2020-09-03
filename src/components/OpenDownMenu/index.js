import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';


const OpenDownMenu = () => {
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
          horizontal:'right',
        }}
      >

      
        <MenuItem onClick={handleClose}>Compra de supermercado 15/08</MenuItem>
        <MenuItem onClick={handleClose}>Compra de Charcuteria</MenuItem>
        <MenuItem onClick={handleClose}>Compras de Limpieza</MenuItem>
      </Menu>
    </div>
  )
}
export default OpenDownMenu;





