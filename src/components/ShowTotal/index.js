import React from 'react';
import './style.css';
import thumbUp from '../../assets/thumbUp.png';
import thumbDown from '../../assets/thumbDown.png';


const ShowTotal = ({ total, showMessage }) => {

  return (
    <div className="ShowTotal_container">
      <div className="ShowTotal_Money">
        <span>{total}</span>
        <span>Total</span>
      </div>

      {showMessage === true ?
        <div className="ShowTotal_message">
          <p>Aun te queda dinero</p>
          <img className="thumbUp" src={thumbUp} alt="Thumb Up" />
        </div> :
        <div className="ShowTotal_message">
          <p>Ya NO te queda dinero</p>
          <img className="thumbUp" src={thumbDown} alt="Thumb Down" />
        </div>
      }


    </div>
  )
}
export default ShowTotal;
