import { useState } from "react"

export default function Conocimiento({ Text, nivel }: { Text: string, nivel: string }) {
    const [clicado, setClicado] = useState(false)
    const classe = clicado ? "giro" : ""
    const aparaceConGiro = clicado ? "" : "displayNone"
    const desapareceConGiro = clicado ? "displayNone" : ""
    return (
        <div className={classe + " conocimiento"} onClick={()=>{setClicado(!clicado)}}>
            <img src={Text + ".png"} alt={Text} className={`${desapareceConGiro} ${Text == "Github" ? " githubBack" : ""} ${["Javascript", "Typescript"].includes(Text) ? " redondeadoConocimiento" : ""}`} />
            <p className={desapareceConGiro}>{Text}</p>
            <p className={aparaceConGiro + " giro descripcioConocimiento"}>{nivel}</p>
        </div>
    )
}