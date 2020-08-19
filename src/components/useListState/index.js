import { useState } from 'react'

export default (initialValue) => {
  const [list, setList] = useState(initialValue);

  return {
    list,
    addItem: (itemText) => {
      const trimmedText = itemText.trim();
      if (trimmedText.length > 0) {
        setList([...list, trimmedText])
      };
    },
    deleteItem: (itemIndex) => {
      const newList = list.filter((_, index) => index !== itemIndex);
      setList(newList);
    }
  }
}
