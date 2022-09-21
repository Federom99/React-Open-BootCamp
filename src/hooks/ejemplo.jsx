import React, {useState} from "react";

export default function Ejemplo(){
    // para un contador
    const valorInicial =0

    //pára una persona

    const personaInicial={
        nombre:"Fede",
        email: "ejemplo@gmail.com"
    }
    
    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    function increment(){
        setContador(contador + 1);
    }

    function updatePersona(){
        setPersona(
            {
                nombre: "pepe",
                email: "pepe@gmail.com"
            }
        )
    }
    

    return(
        <div>
            <h2>contador {contador} </h2>
            <button onClick={increment}>aumentar</button>
            <h2>datos de la persona:</h2>
            <h3>nombre {persona.nombre} </h3>
            <h3>email {persona.email} </h3>
            <button onClick={updatePersona}>Cambiar Datos</button>

        </div>
    )

}