import { useState } from "react"
import { softSkills } from "./Content/Esctudios"
import "./MasDeMi.css"
import CarrucelConcursos from "./CarrucelConcursos"
import CarrucelExperiencias from "./CarrucelExperiencia"

interface Input {
    goStart: (input: number) => void
}

export default function MasDeMiMovil({ goStart }: Input) {
    const [numTramo, setNumTramo] = useState(0)
    console.log(numTramo);

    return (
        <section className="masDeMi">
            {numTramo == 0 &&
                <>
                    {window.innerWidth > 1000 && <a className="move" onClick={() => { goStart(0) }}>&#8963;</a>}
                    <h1 className="textCenter titleChange" onClick={() => { setNumTramo(1) }}>Experiencia <img src="cursor.png" alt="imagen del cursor" /></h1>
                    <CarrucelExperiencias />
                </>

            }
            {numTramo == 1 &&
                <>
                    {window.innerWidth > 1000 && <a className="move" onClick={() => { goStart(0) }}>&#8963;</a>}
                    <h1 className="textCenter titleChange" onClick={() => { setNumTramo(0) }}>Concursos <img src="cursor.png" alt="imagen del cursor" /></h1>
                    <CarrucelConcursos />
                </>
            }
            <h2 className="textCenter">Soft Skills</h2>
            <p className="textCenter">{softSkills.join("  -  ")}</p>
            <p className="mail textCenter" onClick={() => copy("aitorrubiorosales9@gmail.com")}>aitorrubiorosales9@gmail.com</p>
            <p className="mail textCenter" onClick={() => copy("683118484")}>683118484</p>
        </section>
    )
}

const copy = (input: string) => {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = input;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
}