import React, {useState} from "react";

export default function App() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {   
        console.log(text);
        setList([...list, text]);
        setText('');
    }

    const handleDel = (index) => {
        console.log(index);
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
            <ul>
            {
                list.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={()=>handleDel(index)} >Delete</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}