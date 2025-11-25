import { useState } from "react"
import SelectButtons from "./SelectButton";
import RadioButtons from "./RadioButton";


function MyForm(){
    const [getFormData, setFormData] = useState({
        name:"",
        email:""

    })
    return (
        <>
            <form>
                <SelectButtons/>
                <RadioButtons/>
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