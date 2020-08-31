import React, {useState} from "react";
import Items from '../Items/';
import './style.css';
import InputItem from "../InputItem";
import useListState from "../useListState";
import Addbutton from "../Addbutton";
import ShowTotal from '../ShowTotal';
import CashContainer from "../CashContainer";
function List() {
  const { list, addItem, deleteItem, checkItem, addPrecio, goBack} = useListState([]);
  const [ cash, setCash]= useState(0);
  
  return (
    <div className="list_Container">
    <CashContainer setCash={setCash} />
      <div className="column-Titles">
        <ul>
          <li className="cant">Cant</li>
          <li className="articulo">Articulo</li>
          <li className="precio">Precio</li>
        </ul>
      </div>

      <Items
        listItems={list}
        deleteItem={deleteItem}
        checkItem={checkItem}
        addPrecio={addPrecio}
        goBack={goBack} />

      <Addbutton />
      <InputItem saveItem={addItem} />
      <ShowTotal list={list} cash={cash} />
    </div>
  );
}
export default List;
