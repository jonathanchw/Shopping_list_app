import React from 'react';
import './style.css';
import useInputItemState from '../useInputItemState';
const InputNewList = () => {
  const {  handleChange } = useInputItemState("");
 

  return (
    <form className="container_form_InputNewList" onSubmit={(e) => {
      e.preventDefault();

    }}>

      <input className="input_nameList"
        name="descripcion"
        type="text"
        placeholder="Introduce el nombre la de lista"
        onChange={handleChange}

      />
      <input className="input_submit_InputNewList" type="submit" value="Crear" />
    </form>
  );
}
export default InputNewList;
