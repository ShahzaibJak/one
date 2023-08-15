import axios from "axios";
import {  useState } from "react";

export function PredictAge() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const handleNameChange = (event) =>{
        setName(event.target.value)
    }

    const predict = (name) =>{
        let url = "https://api.agify.io/?name="+name;
        axios.get(url).then((res)=>{
            setAge(res.data.age)
        })
    }

    return (
        <div>
            <input value={name} type="text" placeholder="Enter name " onChange={handleNameChange} />
            <button onClick={()=>predict(name)}>Predict Age</button>
            <h2>Predicted age : {age}</h2>
        </div>
    )
}