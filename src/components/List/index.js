import React from "react";
import Items from '../Items/';
import './style.css';
import InputItem from "../InputItem";
import useListState from "../useListState";
import Addbutton from "../Addbutton";
import ShowTotal from '../ShowTotal';
function List() {
  const { list, addItem, deleteItem, checkItem, addPrecio, goBack, total , showMessage } = useListState([]);

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
      <ShowTotal total={total} showMessage={showMessage}/>
    </div>
  );
}
export default List;
