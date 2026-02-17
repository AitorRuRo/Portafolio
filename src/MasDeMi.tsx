import Conocimiento from "./Conocimiento"
import { conocimientosTodos, softSkills } from "./Content/Esctudios"
import Experiencia from "./Experiencia"
import "./MasDeMi.css"
export default function MasDeMi() {
    return (
        <section className="masDeMi">
            <p className="textCenter">Soy una persona apasionada por el código, siempre he querido saber cómo funciona todo lo electrónico por dentro y por eso estoy estudiando actualmente un grado superior en el TIC de Barcelona para conseguir conocimientos, con los cuales tener una buena base y poder seguir aprendiendo por mi parte.</p>
            <h1 className="textCenter">Experiencia</h1>
            <div className="displayFlex gap10 spaceEvenly">
                <Experiencia quina="Técnico informático" tamanyo="w40 " />
                <Experiencia quina="Programador fullstack Diba" tamanyo="w40 " />
            </div>
            <h1 className="textCenter">Conocimientos</h1>
            <div className="displayFlex spaceEvenly">
                {Object.keys(conocimientosTodos).map((conocimiento, index) => (
                    <Conocimiento key={index} Text={conocimiento} nivel={conocimientosTodos[conocimiento]} />
                ))}
            </div>
            <h2 className="textCenter">Soft Skills</h2>
            <p className="textCenter">{softSkills.join("  -  ")}</p>
            <a href="CV_AitorRubioRosales.pdf">CV</a>
        </section >
    )
}