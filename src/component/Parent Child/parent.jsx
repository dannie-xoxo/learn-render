// Parent & Child and Render
import React, { useState } from 'react';
import Child from './child';

function Parent() {
    const[count, setCount] = useState(0)
    console.log('updating parent state....')
    return (
        <>
        <button onClick={() => setCount(p => p + 1)}>Count: {count}</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
        <Child />
        </>
    );
}  

export default Parent;
/*Parent & Child and Render

 -Button Click ---> Parent component re-renders ---> Child component re-renders
 - DOM represented by child components is never updated.
 - Child components go through the render phase but fail or bail out before the commmit phase
 This is called 'Unecessary render'
 This affects the performance optimization.
- When a parent component renders, React will recursively render
all its child components.
- New state same as old state after initial render? Both parent and child do not re-render.
- New state same as old  after re-renders? Parent component is re-rendered one more time
but child components never re-render. */