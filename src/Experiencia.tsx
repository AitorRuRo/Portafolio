import { experiencia } from "./Content/Experiencia";

interface Input {
    quina: string;
    tamanyo: string;
}

export default function Experiencia({ quina, tamanyo }: Input) {
    return (
        <section className={tamanyo}>
            <h1 className="textCenter">{quina}</h1>
            <h2 className="textCenter">{experiencia[quina]["Tiempo"]}</h2>
            <p className="textCenter">{experiencia[quina]["Experiencia"]}</p>
        </section>
    )
}