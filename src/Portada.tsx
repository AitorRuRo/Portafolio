import Me from './Me'
import Conocimiento from './Conocimiento'

import "./Portada.css"
import { conocimientos } from './Content/Esctudios'



export default function Portada() {
    return (
        <section className='portada'>
            <Me />
            <h1>Aitor Rubio</h1>
            <p className='textPortada'>Hola, soy Aitor, un programador que tiene grandes ambiciones.</p>
            <div className='conocimientos displayFlex'>
                {Object.keys(conocimientos).map((conocimiento, index) => (
                    <Conocimiento key={index} Text={conocimiento} nivel={conocimientos[conocimiento]} />
                ))}
            </div>
        </section>
    )
}
