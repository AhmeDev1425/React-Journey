import { useState } from "react"

export default function Appender() {

    const [names, setNames] = useState([
        { id: 1, name: "Ahmed" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Mohamed" }
    ])

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

    return (
        <div>
            <ul>
                {names.map((n) => (
                    <li key={n.id}>
                        {n.name}
                        <button onClick={() => handleDelete(n.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
