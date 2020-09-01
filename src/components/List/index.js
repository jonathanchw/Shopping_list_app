import React, { useState } from "react";
import Items from '../Items/';
import './style.css';
import InputItem from "../InputItem";
import useListState from "../useListState";
import Addbutton from "../Addbutton";
import ShowTotal from '../ShowTotal';
import CashContainer from "../CashContainer";
function List() {
  let initialArr = []
  let initialCash = 0;

  if (localStorage.getItem("myData") !== null) {
    let dataList = localStorage.getItem("myData");
    dataList = JSON.parse(dataList);
    initialArr = (dataList);
  }
  if (localStorage.getItem("myCash") !== null) {
    let dataCash = localStorage.getItem("myCash");
    dataCash = JSON.parse(dataCash);
    initialCash = (dataCash);
  }

  const { list, addItem, deleteItem, checkItem, addPrecio, goBack } = useListState(initialArr);
  const [cash, setCash] = useState(initialCash);

  localStorage.setItem("myData", JSON.stringify(list));
  localStorage.setItem("myCash", JSON.stringify(cash));

  console.log(list)
  console.log(cash)
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
