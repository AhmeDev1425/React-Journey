import { useState } from "react"

export default function RadioButtons() {
    const [getV, setV] = useState("")

    return(
        <>
            <div>
                <input onChange={() => setV("Ahmed")} type="radio" name="status" checked={getV === "Ahmed" ? true:false} />Ahmed
                <input onChange={() => setV("Ramy")} type="radio" name="status" checked={getV === "Ramy" ? true:false}  />Ramy
            </div>
        </>
    )    
}

