import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import FormularioCita from '../components/FormularioCita';
import ListaCitas from '../components/ListaCitas';

import { clinica } from '../data/clinica';
import { citasIniciales } from '../data/citas';
import { itemsMenu } from '../data/navegacion';

function Citas() {
  const [citas, setCitas] = useState(citasIniciales);

  const agregarCita = (nuevaCita) => {
    setCitas(citas.concat(nuevaCita));
  }

  const cancelarCita = (indice) => {
    setCitas(citas.filter((cita, i) => i !== indice));
  }

  return (
    <>
      <Header logo={clinica.logo} titulo={clinica.nombre} subtitulo={clinica.subtitulo}
        itemsMenu={itemsMenu} />

      <main id="contenido" className="contenido">

        <Seccion id="solicitar" titulo={"Solicitar una cita"}>
          <p className="texto-seccion">Pide tu hora en línea, sin llamar por teléfono.</p>

          <FormularioCita onAgregar={agregarCita} />
        </Seccion>

        <Seccion id="listado" titulo={"Próximas citas"}>
          <ListaCitas citas={citas} onCancelar={cancelarCita} />
        </Seccion>

      </main>

      <Footer marca={clinica.nombre} ubicacion={clinica.ubicacion}
        contacto={clinica.contacto} copyright={clinica.copyright} />
    </>
  )
}

export default Citas
