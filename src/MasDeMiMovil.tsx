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
                    <p className="textCenter">Soy una persona apasionada por el código, siempre he querido saber cómo funciona todo lo electrónico por dentro y por eso estoy estudiando actualmente un grado superior en el TIC de Barcelona para conseguir conocimientos, con los cuales tener una buena base y poder seguir aprendiendo por mi parte.</p>
                    <h1 className="textCenter">Experiencia</h1>
                    <CarrucelExperiencias />
                    <a onClick={() => { setNumTramo(1) }}>&#8964;</a>
                </>

            }
            {numTramo == 1 &&
                <>
                    <a className="move" onClick={() => { setNumTramo(0) }}>&#8963;</a>
                    <h1 className="textCenter">Concursos</h1>
                    <CarrucelConcursos />
                    <a onClick={() => { setNumTramo(2) }}>&#8964;</a>
                </>
            }
            {numTramo == 2 &&
                <>
                    <a className="move" onClick={() => { setNumTramo(1) }}>&#8963;</a>
                    <h2 className="textCenter">Soft Skills</h2>
                    <p className="textCenter">{softSkills.join("  -  ")}</p>
                </>
            }
        </section>
    )
}