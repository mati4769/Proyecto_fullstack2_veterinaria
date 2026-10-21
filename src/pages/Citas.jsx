import { useState } from 'react';

import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import FormularioCita from '../components/organisms/FormularioCita';
import ListaCitas from '../components/molecules/ListaCitas';

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
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="solicitar" titulo={"Solicitar una cita"}>
        <p className="texto-seccion">Pide tu hora en línea, sin llamar por teléfono.</p>

        <FormularioCita onAgregar={agregarCita} />
      </Seccion>

      <Seccion id="listado" titulo={"Próximas citas"}>
        <ListaCitas citas={citas} onCancelar={cancelarCita} />
      </Seccion>

    </Pagina>
  )
}

export default Citas