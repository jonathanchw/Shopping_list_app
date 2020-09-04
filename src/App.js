import React, { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  let intitialListasArr=[]
  if (localStorage.getItem("myListas") !== null) {
    let dataListas = localStorage.getItem("myListas");
    intitialListasArr = JSON.parse(dataListas);
     }


  const [listas, setListas] = useState(intitialListasArr);
  
  localStorage.setItem("myListas", JSON.stringify(listas));
  return (
    <div className="App">
      <List setListas={setListas} listas={listas} />
    </div>
  );
}

export default App;
