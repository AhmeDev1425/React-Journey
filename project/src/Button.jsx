import { useState } from "react"
let name = "Asad"

function Button() {
    const state =  useState(name)
    const value =  state[0]
    const setValue =  state[1]

    function buttonClicker() {
        if (value === 'Asad') {
            setValue("asdasd")
        }
        else{
            setValue("Asad")
        }
    }

    return (
        <>
            <div>
                <button onClick={buttonClicker} type="button">hit here</button>
                <h2>{value}</h2>
            </div>
        </>
    )
    }
export default Button