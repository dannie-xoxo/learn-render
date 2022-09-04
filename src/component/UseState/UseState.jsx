//useState and Render
import React, { useState } from 'react';

function UseState() {
    const[count, setCount] = useState(0)
    console.log('updating state....')
    return (
        <>
        <button onClick={() => setCount(p => p + 1)}>Count: {count}</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
        </>
    );
}

export default UseState;
 /*React render
 the render is divided into two categories
 Render phase and Commit phase.
 Render Phase
 - App --> component (flagged)
 -JSX  -------> React elements (JS objects) using the createElement() 
 - Reconcilation of the prev render and new render
 
 Commit Phase
 - changes from the render phase(which is the updated component)----> DOM
 */

 /*useState and Render

 - the setter function from a useState hook will cause th component to re-render
 - the exception is when you update a state hook to the same value as the current state.
 - Same value after the initial render? the component will not re-render
 - Same value after re-renders? React will render that specific component one more time
 and then bail out from any subsequent renders */