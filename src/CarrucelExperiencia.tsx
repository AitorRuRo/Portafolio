import { useState } from "react";
import { experiencia } from "./Content/Experiencia";
import Experiencia from "./Experiencia";

export default function CarrucelExperiencias() {
    const [posicio, setPosicio] = useState(1)

    return (
        <section className="displayFlex carrucel">
            <a onClick={() => {
                if (posicio == 0) {
                    setPosicio(Object.keys(experiencia).length - 1)
                } else {
                    setPosicio(posicio - 1)
                }
            }}>&#8249;</a>
            <Experiencia quina={Object.keys(experiencia)[posicio]} tamanyo="w40 " />
            <a onClick={() => {
                if (posicio == Object.keys(experiencia).length - 1) {
                    setPosicio(0)
                } else {
                    setPosicio(posicio + 1)
                }
            }}>&#8250;</a>
        </section>
    );
}