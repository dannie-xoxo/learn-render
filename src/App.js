import React from 'react';
import './App.css';
import ArrayState from './component/Immutable State/arrayState';
import ObjectState from './component/Immutable State/objectState';
import UseReducer from './component/UseReducer/UseReducer';
import UseState from './component/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectState /> */}
      <ArrayState />
    </div>
  );
}

export default App;
