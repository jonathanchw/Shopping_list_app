import React from 'react';
import './style.css';
import thumbUp from '../../assets/thumbUp.png';


const ShowTotal=()=> {
 
  return (
    <div className="ShowTotal_container">
      <div className="ShowTotal_Money">
      <span>260$</span>
      <span>Total</span>
      </div>
      <div className="ShowTotal_message">
        <p>Aun te queda dinero</p>
        <img className="thumbUp" src={thumbUp} alt="Thumb Up" />
      </div>
    </div>
  )
}
export default ShowTotal;
