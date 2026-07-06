import { useState } from "react";
import { proyectos } from "./Content/Experiencia";
import Proyecto from "./Proyecto";

export default function CarrucelProyectos() {
    const [posicio, setPosicio] = useState(0)

    return (
        <section className="displayFlex carrucel">
            <a onClick={() => {
                if (posicio == 0) {
                    setPosicio(Object.keys(proyectos).length - 1)
                } else {
                    setPosicio(posicio - 1)
                }
            }}>&#8249;</a>
            <Proyecto quina={Object.keys(proyectos)[posicio]} tamanyo="w40 " />
            <a onClick={() => {
                if (posicio == Object.keys(proyectos).length - 1) {
                    setPosicio(0)
                } else {
                    setPosicio(posicio + 1)
                }
            }}>&#8250;</a>
        </section>
    );
}