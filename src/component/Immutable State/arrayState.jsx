//State Immutability and Render
import React, { useState } from 'react';

const initState = ['Daniel', 'Bryan']
function ArrayState() {
    const [persons,setPersons] = useState (initState)

     const clickHandler = () =>  {
        const newPersons = [...persons]
        newPersons.push('Kdee')
        newPersons.push('Dave')
        setPersons(newPersons)
        
    }
    console.log('array state updating.....')
    return ( 
        <>
        <button onClick={clickHandler}>Click</button>
        {
            persons.map(person => (
                <div key={person}>{person}</div>
            ))
        }
        </>
     );
}

export default ArrayState;
/* State immutability and Render.
- Mutating an object or an array as state will not cause a re-render
when used with the useState or useReducer Hook
- To re-render, make a copy of the exsiting state, modify as necessary 
and then pass the new state to the new state to the setter function or
while returning from a reducer function.
- Directly mutating the state is an easy way to create bugs in your application. make sure you dont do that. */