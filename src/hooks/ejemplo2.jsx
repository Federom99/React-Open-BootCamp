import React, {useEffect, useState, useRef} from "react";

// useEffect: para controlar los cambios en la vista
// useState: actualizar estados
// useRef: referenciar elementos dentro de la vista

export default function Ejemplo2(){

    const [contador1, setContador1]=useState(0)
    const [contador2, setContador2]=useState(0)


    const miRef = useRef();

    function increment1(){
        setContador1(contador1 + 1 );
    }

    function increment2(){
        setContador2(contador2 + 1 )
    }
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////
   // useEffect: caso 1: ejecutar siempre un snippet de codigo 
   // cada vez que haya un cambio en el estado del componente, se ejectua aquello que este dentro del useEffect
   
//   useEffect(()=>{
//     console.log("cambio detecado");
//     console.log("mostrnado referencia");
//     console.log(miRef);
//   })
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////

 // caso 2: ejectuar solo cuando cambie contador1
 // cada vez que haya un cambio en el contador1  se ejecuta lo que digfa el useffect 
 // en caso de que cambio contador2, no habra ejecucion

//    useEffect(()=>{
//     console.log("cambio detecado en el contador1");
//     console.log("mostrnado referencia");
//     console.log(miRef);
//   },[contador1])
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////
 // caso 3: ejectuar solo cuando cambie contador1 o contador1
 // cada vez que haya un cambio en el contador1  se ejecuta lo que digfa el useffect 
 // cada vez que haya un cambio en el contador2  se ejecuta lo que digfa el useffect 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(()=>{
    console.log("cambio detecado en el contador1/contador2");
    console.log("mostrnado referencia");
    console.log(miRef);
  },[contador1,contador2])

    return(
        <div>

            <h2>Contador1 {contador1} </h2>
            <h2>Contador2 {contador2} </h2>
            {/* elemento referencia */}
            <h4 ref={miRef} >ejemplo de referencia</h4>

            <button onClick={increment1}>Contador1</button>
            <button onClick={increment2}>Contador2</button>
            
        </div>
    )
}