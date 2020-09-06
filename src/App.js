import React, { useState, lazy, Suspense } from 'react';
import './App.css';
const renderLoader = () => <p>Loading</p>;
const List = lazy(() => import('./components/List'));


function App() {
  let intitialListasArr = []
  if (localStorage.getItem("myListas") !== null) {
    let dataListas = localStorage.getItem("myListas");
    intitialListasArr = JSON.parse(dataListas);
  }
  const [listas, setListas] = useState(intitialListasArr);
  localStorage.setItem("myListas", JSON.stringify(listas));
  return (
    <Suspense fallback={renderLoader()}>
      <div className="App">
        <List setListas={setListas} listas={listas} />
      </div>
    </Suspense>
  );
}

export default App;