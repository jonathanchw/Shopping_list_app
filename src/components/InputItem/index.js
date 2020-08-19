import React from 'react';
import useInputItemState from '../useInputItemState';

const InputItem = ({ saveItem }) => {

  const { item, handleChange, reset } = useInputItemState('');

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      saveItem(item);
      reset();
    }}>
      <input
        type="text"
        placeholder="introduce un producto"
        onChange={handleChange}
        value={item}
      />
    </form>
  );
};


export default InputItem;
