import React, { useState } from "react";
import Items from '../Items/';
import Header from '../Header/';
import './style.css';
import useListState from "../useListState";
import Addbutton from "../Addbutton";
import ShowTotal from '../ShowTotal';
import CashContainer from "../CashContainer";
function List({ setListas, listas }) {

  let initialArr = []
  let initialCash = 0;

  if (localStorage.getItem("myData") !== null) {
    let dataList = localStorage.getItem("myData");
    initialArr = JSON.parse(dataList);
  }
  if (localStorage.getItem("myCash") !== null) {
    let dataCash = localStorage.getItem("myCash");
    initialCash = JSON.parse(dataCash);
  }

  const { list, addItem, deleteItem, checkItem, addPrecio, goBack } = useListState(initialArr);
  const [cash, setCash] = useState(initialCash);
  const nombrelista = "Compras de Supermercado 17/08";


  const nuevaLista = () => {
    setListas([{
      nombrelista,
      cash,
      list
    }])
  }

  localStorage.setItem("myData", JSON.stringify(list));
  localStorage.setItem("myCash", JSON.stringify(cash));


  return (
    <div className="list_Container">
      <Header nombrelista={nombrelista} nuevaLista={nuevaLista} listas={listas} />
      <CashContainer setCash={setCash} cash={cash} />
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

      <Addbutton saveItem={addItem} />
      <ShowTotal list={list} cash={cash} />
    </div>
  );
}
export default List;



/*
 const objetoLista =
   [
     {
       nombreLista: "compra de limpieza",
       cash: 2500,
       list: [
         {
           "cantidad": "1",
           "descripcion": "cloro",
           "precio": 0,
           "check": false
         },
         {
           "cantidad": "2",
           "descripcion": "jabon",
           "precio": 0,
           "check": false
         },
         {
           "cantidad": "1",
           "descripcion": "detergente",
           "precio": 0,
           "check": false
         },
         {
           "cantidad": "1",
           "descripcion": "lavaplatos",
           "precio": 0,
           "check": false
         }
       ]
     },
     {
       nombreLista: "comprasupermercado",
       cash: 1500,
       list:
         [
           {
             "cantidad": "1",
             "descripcion": "cafe",
             "precio": 0,
             "check": false
           },
           {
             "cantidad": "1",
             "descripcion": "arroz",
             "precio": 0,
             "check": false
           },
           {
             "cantidad": "1",
             "descripcion": "pasta",
             "precio": 0,
             "check": false
           },
           {
             "cantidad": "2",
             "descripcion": "azucar",
             "precio": 0,
             "check": false
           }
         ]

     }

   ]
   */







