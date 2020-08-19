import { useState } from 'react'

export default (initialValue) => {
  const [item, setItem] = useState(initialValue);
  return {
    item,
    handleChange: (e) => {
      setItem(e.target.value);
    },
    reset: () => setItem('')
    
  }
}
