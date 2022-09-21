import React, {useState} from "react";

export default function Saludar(props) {

    const [age, setAge] = useState(23);

    const cumple = () =>{
        setAge(age +1)
    }
    const menoscumple = () =>{
        setAge(age-1)
    }
   
  return (
    <div>
      <h1>hola {props.name}</h1>
      <h2>tu edad es {age} </h2>

      <div>
        <button onClick={cumple}>cumplir años</button>
        <button onClick={menoscumple}> no cumplir años</button>
     
      </div>
    </div>
  );
}


