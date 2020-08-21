import React from 'react';
import './style.css';


const Items = ({ listItems, deleteItem }) => {

  return (
    <div className="container_list">
      {listItems.map((item, index) => (
        <ul className="ul_list" key={index.toString()}>
          <li className="li_list_cantidad" >{item.cantidad}</li>
          <li className="li_list_descripcion">{item.descripcion}</li>
          <li className="li_list_precio">0 $</li>
          <li className="li_list"><button className="btn_check">Check</button></li>
          <li className="li_list"><button onClick={() => { deleteItem(index) }} className="btn_delete">Borrar</button></li>
        </ul>
      ))}
    </div>
  )
}
export default Items;