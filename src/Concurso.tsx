import { useState } from "react";
import { concursos } from "./Content/Experiencia";

interface Input {
    quina: string;
    tamanyo: string;
}

export default function Concurso({ quina, tamanyo }: Input) {
    const [numImg, setNumImg] = useState(0)

    if(!concursos[quina]) return
    return (
        <section className={tamanyo}>
            <h2 className="textCenter">{quina}</h2>
            {"Imagenes" in concursos[quina] &&
                <>
                    <a onClick={() => {
                        if (numImg == 0) {
                            setNumImg(Object.keys(concursos[quina].Imagenes).length - 1)
                        } else {
                            setNumImg(numImg - 1)
                        }
                    }}>&#8249;</a>
                    <img src={`${concursos[quina].Imagenes}`} alt={`Imagen de ${quina}`} />
                    <a onClick={() => {
                        if (numImg == Object.keys(concursos[quina].Imagenes).length - 1) {
                            setNumImg(0)
                        } else {
                            setNumImg(numImg + 1)
                        }
                    }}>&#8250;</a>
                </>
            }
            <p className="textCenter">{concursos[quina]["Experiencia"]}</p>
            <p className="textCenter">Lenguaje: {concursos[quina]["Lenguaje"]}</p>
        </section>
    )
}