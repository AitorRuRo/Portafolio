import { useEffect, useState } from 'react';
import Portada from './Portada';
import MasDeMi from './MasDeMi';
import "./App.css"

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [ativado, setActivado] = useState(false);
  const [tipo, setTipo] = useState(true)

  const secciones = [<Portada />, <MasDeMi />];

  useEffect(() => {
    const handleWheel = (e: any) => {
      if (e.cancelable) e.preventDefault();
      if (ativado) return;
      setActivado(true)

      if (e.deltaY > 0) setActiveSection((prev) => { return prev + 1 >= secciones.length ? prev : prev + 1; });
      else setActiveSection((prev) => { return prev - 1 < 0 ? 0 : prev - 1; });

      setTimeout(() => setActivado(false), 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => window.removeEventListener('wheel', handleWheel);;
  }, [secciones]);

  const containerStyle = {
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  return (
    <section className={tipo ? "oscuro" : "claro" + ' container'} style={containerStyle}>
      <div className="change" onClick={() => { setTipo(!tipo) }}></div>
      {secciones.map((seccion) => (
        seccion
      ))}
    </section>
  );
}