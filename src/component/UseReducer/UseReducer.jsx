//useReducer and Render 
import React, { useReducer } from 'react';

const initialState = 0

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return (state + 1)
        case 'decrement':
            return(state - 1)
        case 'reset':
            return (initialState)
        default:
        return(state)
   }
}
function UseReducer() {
const[count, dispatch] = useReducer(reducer, initialState)

console.log('useReducer updating.....')
    return ( 
        <>
        <h2> Count : {count} </h2>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        </>
     );
}

export default UseReducer;
 /*useReducer and Render

 - the dispatch function from a useReducer hook will cause the component to re-render
 - the exception is when you update a state hook to the same value as the current state.
 - Same value after the initial render? the component will not re-render
 - Same value after re-renders? React will render that specific component one more time
 and then bail out from any subsequent renders */