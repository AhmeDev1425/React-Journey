import { useState } from "react"

export default function Appender(){

    const [getNames, setNames] = useState( ["Ahmed","Ali","mohamed"])
    
    const namesList = getNames.map((name)=> {
        return <li>{name}</li>
    }) 
    
    const [getInputNames, setInputNames] = useState()
    

    function handleDevices() {
        setNames([...getNames,getInputNames ])
    }

    return (
        <>
            <div>
                <ul>
                    {namesList}
                </ul>

                <input value={getInputNames} onChange={(e)=> { setInputNames(e.target.value) } } type="text" />setName

                <button onClick={handleDevices}>add</button>

            </div>
        </>
    )

    }
