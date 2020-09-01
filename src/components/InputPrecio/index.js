import React from 'react'
import './style.css';

const InputPrecio = ({ saveItem, getIndex , precio}) => {

  return (
    <div>
      <input className="input_precio"
        name="precio"
        type="number"
        step=".01"
        onChange={(e) => {
          e.preventDefault();
          saveItem({
            value: e.target.value,
            getIndex
          });
        }}
        value={precio}
      />
    </div>
  )
}
export default InputPrecio;
