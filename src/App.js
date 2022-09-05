import React from 'react';
import './App.css';
import ArrayState from './component/Immutable State/arrayState';
import ObjectState from './component/Immutable State/objectState';
import OptChild from './component/Optimization/OptChilld';
import OptGrandParent from './component/Optimization/OptGrandParent';
import OptParent from './component/Optimization/OptParent';
import Parent from './component/Parent Child/parent';
import UseReducer from './component/UseReducer/UseReducer';
import UseState from './component/UseState/UseState';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectState /> */}
      {/* <ArrayState /> */}
      {/* <Parent /> */}
      {/* <OptParent>
        <OptChild />
      </OptParent> */}
      <OptGrandParent />
    </div>
  );
}

export default App;
