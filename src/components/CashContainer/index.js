import React from 'react';
import './style.css';


const CashContainer = ({saveItem}) => {

  return (
    <div className="cashContainer">
      <span className="moneyTitle">Dinero</span>
      <div className="moneyDisplay">
        <span>$</span>
        <input 
        type="number"
        placeholder="Dinero"
        step=".01"
        onChange={(e) => {
          e.preventDefault();
          saveItem({
            value: e.target.value,
            });
        }}/>
        
      </div>
    </div>
  )
}
export default CashContainer;