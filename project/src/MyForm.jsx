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
                        onChange={(e)=> {
                            setFormData({...getFormData, name : e.target.value});
                        }}
                        />

                    <label>Email: </label>

                    <input type="text"
                        value={getFormData.email}
                        onChange={(e)=> {
                            setFormData({...getFormData, email : e.target.value});
                            }}
                        />

                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default MyForm