import { useState } from 'react'
import Button from 'react-bootstrap/Button'

import Campo from '../atoms/Campo'
import CampoSelect from '../atoms/CampoSelect'

import { opcionesMotivo } from '../../data/opciones'

function FormularioCita({ onAgregar }) {
  const [dueno, setDueno] = useState("")
  const [mascota, setMascota] = useState("")
  const [motivo, setMotivo] = useState("")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")

  const enviar = () => {
    if (dueno === "" || mascota === "" || motivo === "" || fecha === "" || hora === "") {
      alert("Debe completar todos los campos")
      return
    }

    const nuevaCita = {
      dueno: dueno,
      mascota: mascota,
      motivo: motivo,
      fecha: fecha,
      hora: hora
    }

    onAgregar(nuevaCita)

    alert("Cita registrada. Te esperamos el " + fecha + " a las " + hora + ".")
    setDueno("")
    setMascota("")
    setMotivo("")
    setFecha("")
    setHora("")
  }

  return (
    <div>
      <Campo id="formDueno" etiqueta="Nombre del dueño :" valor={dueno} onCambio={setDueno} />

      <Campo id="formMascota" etiqueta="Nombre de la mascota :" valor={mascota} onCambio={setMascota} />

      <CampoSelect id="formMotivo" etiqueta="Motivo :" textoInicial="-- Seleccione --"
        opciones={opcionesMotivo} valor={motivo} onCambio={setMotivo} />

      <Campo id="formFecha" etiqueta="Fecha :" tipo="date" valor={fecha} onCambio={setFecha} />

      <Campo id="formHora" etiqueta="Hora :" tipo="time" valor={hora} onCambio={setHora} />

      <Button className="boton" type="button" onClick={enviar}>
        Solicitar cita
      </Button>
    </div>
  )
}

export default FormularioCita