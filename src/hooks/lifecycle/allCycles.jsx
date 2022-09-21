import React, {useEffect} from "react";

export const AllCycles = () =>{

    useEffect(()=>{
        console.log("componente creado")

        const intervalID = setInterval(()=>{
            document.title= `${new Date()}`
            console.log("actualizacion de componente")
        }, 1000)

        return()=>{
            console.log("componente va a desaparecer")
            document.title= "tiempo detenido"
            clearInterval(intervalID)
        }
    },[])

    return(
        <div>

        </div>
    )
}