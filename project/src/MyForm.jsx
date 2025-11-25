import { useState } from "react"

function MyForm(){
    const [getFormData, setFormData] = useState({
        name:"",
        email:""

    })
    return (
        <>
            <form>
                    <label>Name: </label>
                    <input type="text"
                        value={getFormData.name}
                        onChange={(e)=> {setFormData({name:e.target.value, email:getFormData.email})}}
                        />

                    <label>Email: </label>

                    <input type="text"
                        value={getFormData.email}
                        onChange={(e)=> {setFormData({email:e.target.value, name:getFormData.name})}}
                        />

                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default MyForm