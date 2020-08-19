import React from "react";
import Items from '../Items/';
import './style.css';
import InputItem from "../InputItem";
import useListState from "../useListState";

function List() {
  const { list, addItem, deleteItem } = useListState([]);

  return (
    <div className="list_Container">
      <div className="column-Titles">
        <ul>
          <li>Cant</li>
          <li>Articulo</li>
          <li>Precio</li>
        </ul>
      </div>
      <Items listItems={list} deleteItem={deleteItem} />
      <InputItem saveItem={addItem} />
    </div>
  );
}
export default List;
