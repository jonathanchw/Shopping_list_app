import { useState } from 'react'

export default (initialValue) => {

  const [list, setList] = useState(initialValue);


  return {
    list,

    addItem: (itemText) => {
      const trimmedText = itemText.descripcion.trim();
      if (trimmedText.length > 0) {
        setList([...list, itemText])
      };
    },

    deleteItem: (itemIndex) => {
      const newList = list.filter((_, index) => index !== itemIndex);
      setList(newList);
    },

    checkItem: (itemIndex) => {
      itemIndex.check = true;
      setList([...list])
    },

    addPrecio: (itemPrecio) => {
      (list[itemPrecio.getIndex].precio = itemPrecio.value)
      setList([...list]);


    },

    goBack: (itemIndex) => {
      itemIndex.check = false;
      setList([...list])
    },

  }
}
