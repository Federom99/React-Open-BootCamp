import React from "react";

export const Child = ({name}) =>{

        function pulsarBoton(){
            alert("default text")
        }
        function pulsarBotonParams(texto){
                alert(`texto: ${texto}`);
        }


    return(
        <div>
            <p onMouseOver={()=>console.log("mouse over")} >child component</p>
            <button onClick={()=>console.log("boton 1 pulsado")} >Boton1</button>
            <button onClick={pulsarBoton} >Boton2</button>
            <button onClick={ ()=> pulsarBotonParams("hola")} >Boton3</button>
            <input 
            placeholder="insert a text" 
            onFocus={()=>console.log("focus")}
            onChange={(e)=>console.log("input cambiado", e)}
            onCopy={()=>console.log("copy text")}
            />
        </div>
    )
}