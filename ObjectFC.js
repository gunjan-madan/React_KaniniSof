import React, { useState } from 'react'

const ObjectFC = () => {

    const [name, setName] = useState({ firstName: 'Gunjan', lastName: 'Madan' })

    const updateFirstName = (e) => {
        setName({ ...name, firstName: e.target.value })
    }

    const updateLastName = (e) => {
        setName({ ...name, lastName: e.target.value })
    }

    return (
        <>
            <div>
                <label>FirstName:</label>
                <input type='text' value={name.firstName} onChange={updateFirstName}></input>
            </div>
            <div>
                <label>LastName:</label>
                <input type='text' value={name.lastName} onChange={updateLastName}></input>
            </div>
            <div>
                <h3>FirstName: {name.firstName}</h3>
                <h3>LastName: {name.lastName}</h3>
            </div>
        </>
    )
}

export default ObjectFC