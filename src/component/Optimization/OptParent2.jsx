import React, { useState } from 'react';
import MemoisedOptChild2 from './OptChild2';

function OptParent2() { 
    const[count, setCount] = useState(0)
    const[name, setName] = useState('Daniel')
    console.log('updating Optparent2 state....')
    return (
        <>
        <button onClick={() => setCount(p => p + 1)}>Count: {count}</button>
        <button onClick={() => setName('Bryan')}>Change Name</button>
        <MemoisedOptChild2 name= {name}/>
        </>
    );
}  

export default OptParent2;