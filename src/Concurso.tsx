import { concursos } from "./Content/Experiencia";

interface Input {
    quina: string;
    tamanyo: string;
}

export default function Concurso({ quina, tamanyo }: Input) {
    return (
        <section className={tamanyo}>
            <h2 className="textCenter">{quina}</h2>
            <p className="textCenter">{concursos[quina]["Experiencia"]}</p>
            <p className="textCenter">Lenguaje: {concursos[quina]["Lenguaje"]}</p>
        </section>
    )
}