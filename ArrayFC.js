import React, { useState } from 'react'

const ArrayFC = () => {
    const [cities, setCities] = useState([])
    const [city, setCity] = useState("")

    const updateCity = (e) => {
        setCity(e.target.value)
    }

    const addCity = () => {
        setCities([...cities,
        {
            id: cities.length,
            value: city
        }
        ])
    }

    return (
        <>
            <div>
                <select>
                    {cities.map(c => (
                        <option key={c.id} >{c.value}</option>
                    ))}
                </select>
            </div>
            <div>
                <input type="text" onChange={updateCity}></input>
                <button onClick={addCity}>Add City</button>
            </div>
        </>
    )
}

export default ArrayFC