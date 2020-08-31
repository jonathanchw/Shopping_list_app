import { useState } from 'react'

export default (initialValue) => {
  const [item, setItem] = useState(initialValue);
  return {
    item,
    handleChange: (e) => {
      const value = e.target.value;
      setItem({
        ...item,
        [e.target.name]: value
      });
    },
    reset: () => setItem({
      cantidad: "",
      descripcion: "",
      precio: 0,
      check: false
    })

  }
}
