import { experiencia } from "./Content/Experiencia";

interface Input {
    quina: string;
    tamanyo: string;
}

export default function Experiencia({ quina, tamanyo }: Input) {
    return (
        <section className={tamanyo}>
            <h2 className="textCenter">{quina}</h2>
            <h4 className="textCenter">{experiencia[quina]["Tiempo"]}</h4>
            <p className="textCenter">{experiencia[quina]["Experiencia"]}</p>
        </section>
    )
}