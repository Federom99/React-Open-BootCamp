import React, {useState, useContext} from "react";
const miContexto = React.createContext(null)
    function Componente1(){
        const state = useContext(miContexto);
        
    return(
        <div>
            <h1>
                el token es : {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    )
}

 function Componente2(){

    const state = useContext(miContexto);

    return(
        <div>
            <h2> la sesion es: {state.sesion} </h2>
        </div>
    )
}

export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSesionData(
            {
                token: "jwdlt123456789",
                sesion: sesionData.sesion + 1
            }
        );
    }

    return(
      <miContexto.Provider value={sesionData} >
        <Componente1></Componente1>  
        <button onClick={actualizarSesion}>Update</button>
      </miContexto.Provider>
    )
}