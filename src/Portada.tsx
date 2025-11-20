import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Me from './Me'
import Conocimiento from './Conocimiento'
import MasDeMi from './MasDeMi'

import "./Portada.css"
export default function Portada() {
    const navigate = useNavigate()
    const [transicion, setTransicion] = useState(false)
    const ahoraSi = transicion ? "cuerpo":""
    const ahoraSiCuadro = transicion ? "cuadroEnMovimiento":""
    const siguientePagina = () => {
        setTransicion(true)
        setTimeout(() => {
            navigate('/MasDeMi');
        }, 3000);
    }
    const conocimientosPrincipales: Record<string, string> = {
        "Java": "Alto",
        "React": "Alto",
        "Node": "Alto",
        "MySQL": "Alto"
    }
    return (
        <div>
            {transicion && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <MasDeMi />
                </div>
            )}
            <section className={ahoraSi + ' portada'}>
                <div className={ahoraSiCuadro+' cuadro'}></div>
                <Me />
                <h1>Aitor Rubio</h1>
                <p>tmp</p>
                <div className='conocimientos'>
                    {Object.keys(conocimientosPrincipales).map((conocimiento, index) => (
                        <Conocimiento key={index} Text={conocimiento} nivel={conocimientosPrincipales[conocimiento]} />
                    ))}
                </div>
                <p onClick={siguientePagina}>Quieres saber mas?</p>
            </section>

        </div>
    )
}
