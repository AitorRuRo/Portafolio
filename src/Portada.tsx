import Me from './Me'
import Conocimiento from './Conocimiento'

import "./Portada.css"
import { conocimientosPrincipales } from './Content/Esctudios'
export default function Portada() {
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
            <p>&#8964;</p>
        </section>
    )
}
