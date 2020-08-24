import React from 'react';
import './style.css';


const CashContainer = () => {

  return (
    <div className="cashContainer">
      <span className="moneyTitle">Dinero</span>
      <div className="moneyDisplay">
        <span>$</span>
        <span>0</span>
      </div>
    </div>
  )
}
export default CashContainer;