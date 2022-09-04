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