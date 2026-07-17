import Concurso from "./Concurso"
import Experiencia from "./Experiencia"
import "./MasDeMi.css"
import CarrucelExperiencias from "./CarrucelExperiencia"
import CarrucelConcursos from "./CarrucelConcursos"
import Proyecto from "./Proyecto"
import CarrucelProyectos from "./CarrucelProyectos"

export default function MasDeMi() {
    return (
        <section className="masDeMi">
            <h1 className="textCenter">Experiencia</h1>
            {window.innerWidth > 768 ?
                <div className="displayFlex gap10 spaceEvenly">
                    <Experiencia quina="Técnico informático" tamanyo="w40 " />
                    <Experiencia quina="Programador FullStack" tamanyo="w40 " />
                </div> :
                <CarrucelExperiencias />
            }

            <h1 className="textCenter">Concursos</h1>
            {window.innerWidth > 768 ?
                <div className="displayFlex gap10 spaceEvenly">
                    <Concurso quina="Catalunya de ProgramaMe" tamanyo="w40" />
                    <Concurso quina="Final del concurso de ProgramaMe" tamanyo="w40" />
                </div> :
                <CarrucelConcursos />
            }
            <h1 className="textCenter">Proyectos</h1>
            <div className="textCenter">
                {window.innerWidth > 768 ?
                    <div className="displayFlex gap10 spaceEvenly">
                        <Proyecto quina="Hundir la flota" tamanyo="w40" />
                    </div> :
                    <CarrucelProyectos />
                }
            </div>
            <a href="https://github.com/AitorRuRo">GitHub</a>
            <a href="https://www.linkedin.com/in/aitor-rubio-rosales-400bb7334/">Linkedin</a>
        </section >
    )

}