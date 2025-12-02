import { useState } from "react"
let name = "Asad"

function Button() {
    const [value, setValue] =  useState(name)


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