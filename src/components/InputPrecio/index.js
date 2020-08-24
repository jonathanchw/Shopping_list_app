import React from 'react'
import './style.css';

const InputPrecio = ({ saveItem, getIndex }) => {

  return (
    <div>
      <input className="input_precio"
        name="precio"
        type="number"
        onChange={(e) => {
          e.preventDefault();
          saveItem({
            value: e.target.value,
            getIndex
          });
        }}
      />
    </div>
  )
}
export default InputPrecio;
