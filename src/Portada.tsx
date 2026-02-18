import Me from './Me'
import Conocimiento from './Conocimiento'

import "./Portada.css"
import { conocimientos } from './Content/Esctudios'

interface Input {
    goMasDeMi: (input: number) => void
}

export default function Portada({ goMasDeMi }: Input) {
    return (
        <section className='portada'>
            <Me />
            <h1>Aitor Rubio</h1>
            <p>Hola, soy Aitor, un programador que tiene grandes ambiciones.</p>
            <div className='conocimientos'>
                {Object.keys(conocimientos).map((conocimiento, index) => (
                    <Conocimiento key={index} Text={conocimiento} nivel={conocimientos[conocimiento]} />
                ))}
            </div>
            {window.innerWidth > 1000 && <a onClick={() => { goMasDeMi(1) }}>&#8964;</a>}

        </section>
    )
}
