import type { Experiencia } from "../Interfaces/Experiencia"

export const experiencia: Experiencia = {
    "Técnico informático": {
        "Tiempo": "(Enero 2022 - Noviembre 2023)",
        "Experiencia": "Aunque éramos solo dos personas, asumí responsabilidades organizativas, siguiendo las necesidades del supervisor y guiando a mi compañero en sus tareas. Esta experiencia me permitió mejorar en la toma de decisiones y el trabajo en equipo.",
    },
    "DevOps": {
        "Tiempo": "(Octubre 2025 - 30 Junio 2026)",
        "Experiencia": "Trabajé en un proyecto de aplicación web donde los administradores pueden asignar tareas a otros usuarios. En el front-end utilizo React.js, el back-end está desarrollado con Node/Express y la base de datos con MySQL. Aquí reforcé mis conocimientos de React y Node, creando: Buscador, usuarios y perfiles, login, tokens, horarios, calendarios, eventos y mucho más. Añadiendo que tuve que crear un servidor Linux y configurarlo todo desde la seguridad, como el apache, en este apartado aprendí a configurar más profundamente un servidor.",
        "Carta": "HojaRecomendacionDIBA.pdf"
    }
}

export const concursos: Experiencia = {
    "Catalunya de ProgramaMe": {
        "Experiencia": "En 2025 participé en este concurso. Competimos en la primera fase en Reus y logramos la segunda posición con el equipo completo.",
        "Lenguaje": "Java"
    },
    "Final del concurso de ProgramaMe": {
        "Experiencia": "El 6 de junio de 2025 participamos en la final en Madrid, donde quedamos en cuarta posición a pesar de contar con un integrante menos en el equipo.",
        "Lenguaje": "Java"
    }
}

export const proyectos: Experiencia = {
    "Hundir la flota":{
        "Experiencia":`En este proyecto la hice para aprender cómo "arrastrar" elementos con el ratón y entender cómo desarrollar por turnos un juego algo más complejo.\n\nEl enemigo solo tiene dos estados:\nBuscando: selecciona el "disparo" en una casilla aleatoria.\nAtaque: cuando encuentra un barco, ataca en las cuatro direcciones. Si en una dirección se bloquea, sigue buscando en las demás hasta que todas las direcciones sean agua.`,
        "url":"https://aitorruro.github.io/Hundir-la-flota/",
        "Lenguajes": ["React","TypeScript"],
        "Imagenes":["b0.png","b1.png","b2.png"]
    }
}