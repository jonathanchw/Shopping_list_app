import { useState } from 'react'

export default (initialValue) => {
  const [list, setList] = useState(initialValue);
  /* --resolver aca la suma de los precios y parsearlos al componente CashContainer--
  const arrPrecio = [0];
  list.map((item) => {
    return item.precio !== 0 ? arrPrecio.push(parseInt(item.precio, 10)) : null
  });
  const sumaTotal = arrPrecio.reduce((acumulator, current) => acumulator + current);
console.log(sumaTotal);*/
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
    }

  }
}
