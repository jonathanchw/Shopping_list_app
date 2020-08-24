import React from 'react';
import useInputItemState from '../useInputItemState';
import './style.css';
const InputItem = ({ saveItem }) => {

  const {item, reset, handleChange} = useInputItemState({
    cantidad:"",
    descripcion: "",
    precio: 0,
    check : false
  });

  return (
    <form className="container_form" onSubmit={(e) => {
      e.preventDefault();
      saveItem( item );
      reset();
    }}>
      <input className="input_cantidad"
        name="cantidad"
        type="number"
        placeholder="Introduce la cantidad"
        onChange={handleChange}
        value={item.cantidad}
      />
      <input className="input_descripcion"
        name="descripcion"
        type="text"
        placeholder="Introduce un producto"
        onChange={handleChange}
        value={item.descripcion}
      />
      <input className="input_submit" type="submit" value="Añadir" />
    </form>
  );
};

export default InputItem;
