import React, {useState} from 'react';
import './style.css';

const Addbutton= ()=> {
    const [, setaddbutton]= useState(false);

const handleChange = ()=>{
  setaddbutton(true)

}


  return (
   <button className="addbutton" onClick={handleChange}>+</button>
  )
}
export default Addbutton;