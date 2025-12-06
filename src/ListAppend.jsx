import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ContData } from './Contexts.jsx'

export default function Appender() {

    const [names, setNames] = useState([
        { id: 1, name: "Ahmed" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Mohamed" }
    ])
    const data = useContext(ContData); 
    let {id} = useParams();
    // const ns = data.find((n)=> n.id)

    const [inputName, setInputName] = useState("")

    const nextId = names.length > 0 ? Math.max(...names.map(n => n.id)) + 1 : 1

    function handleAdd() {
        if (!inputName.trim()) return;

        setNames([...names, { id: nextId, name: inputName }])
        setInputName("")
    }

    function handleDelete(id) {
        setNames(names.filter(n => n.id !== id))
    }
    
function handleEdit(id) {
    const updated = names.map((el) => {
        if (el.id === id) {
            return { ...el, name: el.name + "0" }
        }
        return el
    })

    setNames(updated)
}


    return (
        <div style={{backgroundColor:'yellow'}}>
            <ul>
                {names.map((n) => (
                    <li key={n.id}>
                        {n.name}
                        <button onClick={() => handleDelete(n.id)}>Delete</button>
                        <button onClick={() => handleEdit(n.id)}>Edit</button>
                    </li>
                ))}
            </ul>
                <p>Route param: {id}</p>

                <div>
                    <p>Context ID: {data.id}</p>
                    <p>Context Name: {data.name}</p>
                </div>

            <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
