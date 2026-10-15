import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Campo from './Campo'

function FormularioFicha({ onAgregar }) {
  const [mascota, setMascota] = useState("")
  const [diagnostico, setDiagnostico] = useState("")
  const [medicamento, setMedicamento] = useState("")
  const [vacuna, setVacuna] = useState("")
  const [fecha, setFecha] = useState("")

  const enviar = () => {
    // medicamento y vacuna son opcionales
    if (mascota === "" || diagnostico === "" || fecha === "") {
      alert("Debe completar mascota, diagnóstico y fecha")
      return
    }

    const nuevaFicha = {
      mascota: mascota,
      diagnostico: diagnostico,
      medicamento: medicamento,
      vacuna: vacuna,
      fecha: fecha
    }

    onAgregar(nuevaFicha)

    alert("Atención guardada en la ficha digital de " + mascota + ".")
    setMascota("")
    setDiagnostico("")
    setMedicamento("")
    setVacuna("")
    setFecha("")
  }

  return (
    <Form>
      <Campo id="formMascota" etiqueta="Mascota :" valor={mascota} onCambio={setMascota} />

      <Campo id="formDiagnostico" etiqueta="Diagnóstico :" valor={diagnostico} onCambio={setDiagnostico} />

      <Campo id="formMedicamento" etiqueta="Medicamento :" valor={medicamento} onCambio={setMedicamento} />

      <Campo id="formVacuna" etiqueta="Vacuna aplicada (opcional) :" placeholder="Ej: Antirrábica"
        valor={vacuna} onCambio={setVacuna} />

      <Campo id="formFecha" etiqueta="Fecha :" tipo="date" valor={fecha} onCambio={setFecha} />

      <Button className="boton" type="button" onClick={enviar}>
        Guardar atención
      </Button>
    </Form>
  )
}

export default FormularioFicha