import Concurso from "./Concurso"
import Experiencia from "./Experiencia"
import "./MasDeMi.css"
import CarrucelExperiencias from "./CarrucelExperiencia"
import CarrucelConcursos from "./CarrucelConcursos"

export default function MasDeMi() {
    return (
        <section className="masDeMi">
            <h1 className="textCenter">Experiencia</h1>
            {window.innerWidth > 768 ?
                <div className="displayFlex gap10 spaceEvenly">
                    <Experiencia quina="Técnico informático" tamanyo="w40 " />
                    <Experiencia quina="Fullstack Diba" tamanyo="w40 " />
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
            <p className="textCenter">
                Actualmente no muestro mis proyectos iniciales porque, aunque cuento con varios desarrollos propios (como un Tres en raya, Adivina la palabra, Hundir la flota o una app de restaurante), prefiero publicar solo contenido que cumpla con un estándar de calidad profesional.
                <br />
                Próximamente subiré mi primer proyecto destacado: una biblioteca de código personal diseñada para organizar y localizar fragmentos de código de manera eficiente, evitando perder tiempo buscando en proyectos pasados.
            </p>
        </section >
    )

}