import React from 'react';
import './style.css';

const CashContainer = ({setCash, cash}) => {
    return (
    <div className="cashContainer">
      <span className="moneyTitle">Dinero</span>
      <div className="moneyDisplay">
        <span>$</span>
        <input 
        type="number"
        placeholder="Dinero"
        step=".01"
        onChange={(e)=>{
          e.preventDefault();
          setCash(parseFloat(e.target.value))
        }}
        value= {cash}
        
        />
        
      </div>
    </div>
  )
}
export default CashContainer;