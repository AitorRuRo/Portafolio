import { useState } from 'react';
import Portada from './Portada';
import MasDeMi from './MasDeMi';
import "./App.css"
import { copy } from "./Utils/Copy"

export default function App() {
  const [tipo, setTipo] = useState(true)


  return (
    <section className={tipo ? "oscuro" : "claro" + ' container'}>
      <div className="change" onClick={() => { setTipo(!tipo) }}>
        <img src={tipo ? "sol.png" : "luna.png"} alt="imagen del tema del fondo" />
      </div>
      <Portada />
      <MasDeMi />
      <div className="displayFlex gap10 infoContacto">
        <p className="mail textCenter" onClick={() => copy("aitorrubiorosales9@gmail.com")}>aitorrubiorosales9@gmail.com</p>
        <p className="mail textCenter" onClick={() => copy("683118484")}>683118484</p>
      </div>
    </section>
  );
}