import { useState } from "react";

import { proyectos } from "./Content/Experiencia";

interface Input {
    quina: string;
    tamanyo: string;
}

export default function Proyecto({ quina, tamanyo }: Input) {
    const [numImg, setNumImg] = useState(0)

    return (
        <section className={tamanyo + " proyecto"}>
            <h2 className="textCenter">{quina}</h2>
            {"Imagenes" in proyectos[quina] &&
                <div className="displayFlex">
                    <a onClick={() => {
                        if (numImg == 0) {
                            setNumImg(Object.keys(proyectos[quina].Imagenes).length - 1)
                        } else {
                            setNumImg(numImg - 1)
                        }
                    }}>&#8249;</a>
                    <img src={`${proyectos[quina]["Imagenes"][numImg]}`} alt={`Imagen de ${quina}`} className="w80"/>
                    <a onClick={() => {
                        if (numImg == Object.keys(proyectos[quina].Imagenes).length - 1) {
                            setNumImg(0)
                        } else {
                            setNumImg(numImg + 1)
                        }
                    }}>&#8250;</a>
                </div>
            }
            <p className="textCenter">{proyectos[quina]["Experiencia"]}</p>
            <h3>Herramientas / Lenguajes / Bibliotecas</h3>
            {typeof proyectos[quina]["Lenguajes"] != "string" &&
                <div className="displayFlex textCenter spaceEvenly">
                    {proyectos[quina]["Lenguajes"].map(proyecto => (
                        <p>{proyecto}</p>
                    ))}
                </div>
            }
            <p><a href={`${proyectos[quina]["url"]}`}>Probar</a></p>
        </section>
    )
}