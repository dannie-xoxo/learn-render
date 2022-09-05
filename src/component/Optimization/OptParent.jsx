import React, { useState } from 'react';

function OptParent({children}) { //OptChild component is passed as a children prop
    const[count, setCount] = useState(0)
    console.log('updating Optparent state....')
    return (
        <>
        <button onClick={() => setCount(p => p + 1)}>Count: {count}</button>
        {children}
        </>
    );
}  

export default OptParent;

/*Same element Reference
Component can change its state but not its props
React automatically provides the optimization
Children props has to be referencing the same element from the prev render,
will skip the render phase of the optchild component.

Causes for re-render.
- A component can be rendered if it calls a setter function or a dispatch function
- A component can render if its parent component is rendered*/