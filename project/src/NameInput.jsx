import { useState } from "react"

export default function NameInput() {
    const [getV, setV] = useState("")  

    function getInput(event) {
            setV(event.target.value)
        }

    return(
            <>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input value={getV}  onChange={getInput} type="text" />
                </div>
            </>

        )
    }
