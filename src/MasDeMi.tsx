import Concurso from "./Concurso"
import { softSkills } from "./Content/Esctudios"
import Experiencia from "./Experiencia"
import MasDeMiMovil from "./MasDeMiMovil"
import "./MasDeMi.css"

interface Input {
    goStart: (input: number) => void
}

export default function MasDeMi({ goStart }: Input) {
    if (window.innerWidth > 768) {
        return (
            <section className="masDeMi">
                <a className="move" onClick={() => { goStart(0) }}>&#8963;</a>
                <h1 className="textCenter">Experiencia</h1>
                <div className="displayFlex gap10 spaceEvenly">
                    <Experiencia quina="Técnico informático" tamanyo="w40 " />
                    <Experiencia quina="Fullstack Diba" tamanyo="w40 " />
                </div>
                <h1 className="textCenter">Concursos</h1>
                <div className="displayFlex gap10 spaceEvenly">
                    <Concurso quina="Catalunya de Programame" tamanyo="w40" />
                    <Concurso quina="Final del concurso de Programame" tamanyo="w40" />
                </div>
                <h2 className="textCenter">Soft Skills</h2>
                <p className="textCenter">{softSkills.join("  -  ")}</p>
            </section >
        )
    } else {
        return <MasDeMiMovil goStart={goStart} />
    }

}