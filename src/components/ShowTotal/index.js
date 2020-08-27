import React from 'react';
import './style.css';
import thumbUp from '../../assets/thumbUp.png';
import thumbDown from '../../assets/thumbDown.png';
import money from '../../assets/money.png';


const ShowTotal = ({ list, cash }) => {
  const arrPrecio = [0];
  list.map((item) => {
    return item.precio !== 0 ? arrPrecio.push(parseFloat(item.precio, 10)) : null
  });
  const total = arrPrecio.reduce((acumulator, current) => acumulator + current);

  const showMessage = (cash > total)
  return (
    <div className="ShowTotal_container">
      <div className="ShowTotal_Money">
        <span>{total}</span>
        <span>Total</span>
      </div>

      {cash === 0 ?
        <div className="ShowTotal_message">
          <p>Ingrese el dinero </p>
          <img className="thumbUp" src={money} alt="Thumb Up" />
        </div>
        :
        showMessage ?
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
