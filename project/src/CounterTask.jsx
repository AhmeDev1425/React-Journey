import { useState } from "react"

export default function CounterTask(){
    let [getN, setN] = useState(0)
    return(
    <>
        <div>

            <button onClick={() => { 
                setN(++getN);
            }} type="button">{getN}</button>

        </div>
            
    </>
    )

}