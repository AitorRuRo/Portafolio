import { useState } from "react"

export default function Conocimiento({Text,nivel}:{Text:string, nivel:string}){
    const [clicado, setClicado] = useState(false)
    const classe = clicado ? "giro":""
    const aparaceConGiro = clicado ? "":"displayNone"
    const desapareceConGiro = clicado ? "displayNone":""
    const change = () =>{setClicado(!clicado)}
    return(
        <div className={classe + " conocimiento"} onClick={change}>
            <img src={Text+".png"} alt={Text} className={desapareceConGiro}/>
            <p className={desapareceConGiro}>{Text}</p>
            <p className={aparaceConGiro + " giro"}>{nivel}</p>
        </div>
    )
}