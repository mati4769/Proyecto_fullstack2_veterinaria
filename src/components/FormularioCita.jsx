import Campo from './Campo'
import CampoSelect from './CampoSelect'

import { opcionesMotivo } from '../data/opciones'

function FormularioCita({ onAgregar }) {

  const enviar = (event) => {
    event.preventDefault();

    const formulario = event.target;

    const nuevaCita = {
        dueno: formulario.elements.dueno.value,
        mascota: formulario.elements.mascota.value,
        motivo: formulario.elements.motivo.value,
        fecha: formulario.elements.fecha.value,
        hora: formulario.elements.hora.value
    };

    onAgregar(nuevaCita);

    alert("Cita registrada. Te esperamos el " + nuevaCita.fecha + " a las " + nuevaCita.hora + ".");
    formulario.reset();
  }

  return (
    <form id="formCita" onSubmit={enviar}>
      <Campo etiqueta="Nombre del dueño :" nombre="dueno" />

      <Campo etiqueta="Nombre de la mascota :" nombre="mascota" />

      <CampoSelect
        etiqueta="Motivo :"
        nombre="motivo"
        textoInicial="-- Seleccione --"
        opciones={opcionesMotivo}
      />

      <Campo etiqueta="Fecha :" tipo="date" nombre="fecha" />

      <Campo etiqueta="Hora :" tipo="time" nombre="hora" />

      <button type="submit" className="boton">Solicitar cita</button>
    </form>
  )
}

export default FormularioCita
