import { useState } from "react";
import { experiencia } from "./Content/Experiencia";

interface Input {
    quina: string;
    tamanyo: string;
}

export default function Experiencia({ quina, tamanyo }: Input) {
    const [numImg, setNumImg] = useState(0)

    if (!experiencia[quina]) return

    return (
        <section className={`${tamanyo} displayFlex column pb10px`}>
            <h2 className="textCenter">{quina}</h2>
            {"Imagenes" in experiencia[quina] &&
                <>
                    <a onClick={() => {
                        if (numImg == 0) {
                            setNumImg(Object.keys(experiencia[quina].Imagenes).length - 1)
                        } else {
                            setNumImg(numImg - 1)
                        }
                    }}>&#8249;</a>
                    <img src={`${experiencia[quina].Imagenes}`} alt={`Imagen de ${quina}`} />
                    <a onClick={() => {
                        if (numImg == Object.keys(experiencia[quina].Imagenes).length - 1) {
                            setNumImg(0)
                        } else {
                            setNumImg(numImg + 1)
                        }
                    }}>&#8250;</a>
                </>
            }
            <h4 className="textCenter">{experiencia[quina]["Tiempo"]}</h4>
            <p className="textCenter">{experiencia[quina]["Experiencia"]}</p>
            {"Carta" in experiencia[quina] && 
                <a className="textCenter" href={`${experiencia[quina]["Carta"]}`}>Carta de recomendación</a>
            }
        </section>
    )
}