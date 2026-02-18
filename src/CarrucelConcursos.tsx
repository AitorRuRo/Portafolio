import { useState } from "react";
import { concursos } from "./Content/Experiencia";
import Concurso from "./Concurso";

export default function CarrucelConcursos() {
    const [posicio, setPosicio] = useState(1)

    return (
        <section className="displayFlex carrucel">
            <a onClick={() => {
                if (posicio == 0) {
                    setPosicio(Object.keys(concursos).length - 1)
                } else {
                    setPosicio(posicio - 1)
                }
            }}>&#8249;</a>
            <Concurso quina={Object.keys(concursos)[posicio]} tamanyo="w40 " />
            <a onClick={() => {
                if (posicio == Object.keys(concursos).length - 1) {
                    setPosicio(0)
                } else {
                    setPosicio(posicio + 1)
                }
            }}>&#8250;</a>
        </section>
    );
}