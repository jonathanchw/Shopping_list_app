import React from 'react';
import './style.css';
import InputPrecio from '../InputPrecio';

const Items = ({ listItems, deleteItem, checkItem,addPrecio }) => {

  return (
    <div className="container_list">
      {listItems.map((item, index) => (
        <ul className="ul_list" key={index.toString()}>
          <li className="li_list_cantidad">{item.cantidad}</li>
          {item.check === true ? <li className="li_list_descripcion_Check" >{item.descripcion}</li> : <li className="li_list_descripcion">{item.descripcion}</li>}
          <li className="li_list_precio">
            <InputPrecio saveItem={addPrecio} getIndex={index} />
          </li>
          <li className="li_list"><button onClick={() => { checkItem(item) }} className="btn_check">Check</button></li>
          <li className="li_list"><button onClick={() => { deleteItem(index) }} className="btn_delete">Borrar</button></li>
        </ul>
      ))}
    </div>
  )
}
export default Items;