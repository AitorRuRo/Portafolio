import Me from './Me'
import Conocimiento from './Conocimiento'

import "./Portada.css"
import { conocimientosPrincipales } from './Content/Esctudios'

interface Input{
    goMasDeMi: (input:number) => void
}

export default function Portada({goMasDeMi}:Input) {
    return (
        <section className='portada'>
            <Me />
            <h1>Aitor Rubio</h1>
            <p>Hola soy Aitor un programador que tiene grandes ambiciones</p>
            <div className='conocimientos'>
                {Object.keys(conocimientosPrincipales).map((conocimiento, index) => (
                    <Conocimiento key={index} Text={conocimiento} nivel={conocimientosPrincipales[conocimiento]} />
                ))}
            </div>
            <p>Quieres saber mas?</p>
            <a onClick={()=>{goMasDeMi(1)}}>&#8964;</a>
        </section>
    )
}
