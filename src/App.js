import React from 'react';

import './App.css';
import Header from './components/Header/';
import List from './components/List';
import ShowTotal from './components/ShowTotal';


function App() {
  return (
    <div className="App">
      <Header />

      <List />
      <ShowTotal />
    </div>
  );
}

export default App;
