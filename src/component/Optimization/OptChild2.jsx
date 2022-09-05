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