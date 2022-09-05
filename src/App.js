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
import OptParent2 from './component/Optimization/OptParent2';

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
      {/* <OptGrandParent /> */}
      <OptParent2 />
    </div>
  );
}

export default App;
