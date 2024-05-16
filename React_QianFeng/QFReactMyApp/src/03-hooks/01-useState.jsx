import React, {useState} from "react";

export default function App() {

    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(30);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <button onClick={() => {
                setName("Guanghui")
                setAge(44)
            }}>Click</button>
        </div>
    );
}