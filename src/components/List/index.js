import React from "react";
import Items from '../Items/';
import './style.css';
import InputItem from "../InputItem";
import useListState from "../useListState";
import Addbutton from "../Addbutton";

function List() {
  const { list, addItem, deleteItem, checkItem, addPrecio, goBack } = useListState([]);

  return (
    <div className="list_Container">
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
    </div>
  );
}
export default List;
