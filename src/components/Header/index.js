import React from "react";
import "./style.css";
import HamburgerMenu from "../HamburgerMenu";
import  OpenDownMenu from "../OpenDownMenu";


const Header = () => {

  return (
    <div className="container">

      <HamburgerMenu />
      <div className="listTitle">
        <h3>Compras de Supermercado</h3>
        <OpenDownMenu />
      </div>


    </div>
  );
};
export default Header;
