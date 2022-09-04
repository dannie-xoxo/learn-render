import React, { useState } from 'react';

const initState = {
    fname:'Daniel',
    lname: 'Bryan'
}

function ObjectState() {
    const[persons, setPersons] = useState(initState)

    const clickHandler = () => {
        const newPersons = {...persons} // merge the current stateto the new state
        newPersons.fname= 'Sunny'
        newPersons.lname= 'Child'
        setPersons(newPersons)
    }
    console.log('object state updating....')
    return ( 
        <>
        <button onClick={clickHandler}>{persons.fname}-{persons.lname}</button>
        </>
     );
}

export default ObjectState;