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
                            const newData = {...getFormData};
                            newData.name = e.target.value;
                            setFormData(newData);
                        }}
                        />

                    <label>Email: </label>

                    <input type="text"
                        value={getFormData.email}
                        onChange={(e)=> {
                            const newData = {...getFormData};
                            newData.email = e.target.value;
                            setFormData(newData);
                            }}
                        />

                <button type="submit">submit</button>
            </form>
        </>
    )
}
export default MyForm