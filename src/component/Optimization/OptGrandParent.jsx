import React, { useState } from 'react';
import OptChild from './OptChilld';
import OptParent from './OptParent';

function OptGrandParent() {
    const[newCount, setNewCount] = useState(0)
    return ( 
        <>
         <div>Grand count: {newCount}</div>
         <button onClick={() => setNewCount(nc => nc +1)}>Click</button>
         <OptParent newCount= {newCount}>
            <OptChild />
         </OptParent >
        </>
     );
}

export default OptGrandParent;
/* Same Element Reference

- if  experiencing performance issues, you can extract the expensive child component
and instead pass it down as a prop to the parent component.
-Whenever there is a re-render caused by a change in the state of the parent component,
React will optimize the re-render for you by knowing that the props has to be referencing the same element
before and after the render. */