import React from "react";
import "./style.css";
import HamburgerMenu from "../HamburgerMenu";
import OpenDownMenu from "../OpenDownMenu";


const Header = ({nombrelista, nuevaLista, listas}) => {

  return (
    <div className="container">
      <HamburgerMenu nuevaLista={nuevaLista}/>
      <div className="listTitle">
        <h3>{nombrelista}</h3>
        <OpenDownMenu listas={listas} />
      </div>
    </div>
  );
};
export default Header;
