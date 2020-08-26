import { useState } from 'react'

export default (initialValue) => {

  const [list, setList] = useState(initialValue);


  //--total devuelve la suma de todos los precios de los items----//
  const arrPrecio = [0];
  list.map((item) => {
    return item.precio !== 0 ? arrPrecio.push(parseFloat(item.precio, 10)) : null
  });
  const total = arrPrecio.reduce((acumulator, current) => acumulator + current);
  const showMessage = false;

  return {
    list,
    total,
    showMessage,
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

    addCash: (showcash) => {
      /*por resolver aun logica para que showmessage cambie.
      const cash = parseFloat(showcash.value, 10);
           console.log(total)
*/
    }
  }
}
