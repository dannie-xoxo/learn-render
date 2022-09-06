// React.Memo
import React from 'react';

function OptChild2() {
    console.log('Updating Optchild2 state......')
    return ( 
        <>
        OptChild2 component
        </>
     );
}
export const MemoisedOptChild2 = React.memo(OptChild2)
export default OptChild2;
/*React.memo

In React, when a parent component renders, a child component might un-necessary render
- To optimize this behaviour, you can use react memo and pass in the child component.
-React.memo will perform a shallow comparision of the previous and new props and
re-render the child component only if the props have changed
- in some cases, React.memo is used incorrectly
- If child components have children elements(props passed as children), there's no need to wrap the component
with react.memo because {props.children} is always a new reference which 
will cause the child component to always re-render */   