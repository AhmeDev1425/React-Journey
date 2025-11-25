import { useState } from "react"

function MyForm(){
    const [getN, setN] = useState("")
    const [getE, setE] = useState("")
    return (
        <>
            <form>
                    <label>Name: </label>
                    <input type="text"
                    value={getN}
                        onChange={(e)=> {setN(e.target.value)}}
                         />
                    <label>Email: </label>
                    <input
                        value={getE}
                        onChange={(e)=> {setE(e.target.value)}}
                    type="text" />
                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default MyForm