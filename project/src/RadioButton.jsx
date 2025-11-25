import { useState } from "react"

export default function RadioButtons() {
    const [getV, setV] = useState()

    return(
        <>
            <select onChange={(e)=> {setV(e.target.value)} } value={getV} name="" id="">
                <option >egypt</option>
                <option >syria</option>
                <option >iraq</option>
            </select>
        </>

    )
    
}
