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
                    <a className="move" onClick={() => { goStart(0) }}>&#8963;</a>
                    <h1 className="textCenter">Experiencia</h1>
                    <CarrucelExperiencias />
                    <a className="move" onClick={() => { setNumTramo(1) }}>&#8964;</a>
                </>

            }
            {numTramo == 1 &&
                <>
                    <a className="move" onClick={() => { setNumTramo(0) }}>&#8963;</a>
                    <h1 className="textCenter">Concursos</h1>
                    <CarrucelConcursos />
                    <h2 className="textCenter">Soft Skills</h2>
                    <p className="textCenter">{softSkills.join("  -  ")}</p>
                    <p className="mail textCenter" onClick={() => {
                        const elementoTemporal = document.createElement("textarea");
                        elementoTemporal.value = "aitorrubiorosales9@gmail.com";
                        document.body.appendChild(elementoTemporal);
                        elementoTemporal.select();
                        document.execCommand("copy");
                    }}>aitorrubiorosales9@gmail.com</p>
                    <p className="mail textCenter" onClick={() => {
                        const elementoTemporal = document.createElement("textarea");
                        elementoTemporal.value = "683118484";
                        document.body.appendChild(elementoTemporal);
                        elementoTemporal.select();
                        document.execCommand("copy");
                    }}>683118484</p>
                </>
            }
        </section>
    )
}