import Campo from './Campo'

function FormularioFicha({ onAgregar }) {

  const enviar = (event) => {
    event.preventDefault();

    const formulario = event.target;

    const nuevaFicha = {
        mascota: formulario.elements.mascota.value,
        diagnostico: formulario.elements.diagnostico.value,
        medicamento: formulario.elements.medicamento.value,
        vacuna: formulario.elements.vacuna.value,
        fecha: formulario.elements.fecha.value
    };

    onAgregar(nuevaFicha);

    alert("Atención guardada en la ficha digital de " + nuevaFicha.mascota + ".");
    formulario.reset();
  }

  return (
    <form id="formFicha" onSubmit={enviar}>
      <Campo etiqueta="Mascota :" nombre="mascota" />

      <Campo etiqueta="Diagnóstico :" nombre="diagnostico" />

      <Campo etiqueta="Medicamento :" nombre="medicamento" requerido={false} />

      <Campo etiqueta="Vacuna aplicada (opcional) :" nombre="vacuna" placeholder="Ej: Antirrábica" requerido={false} />

      <Campo etiqueta="Fecha :" tipo="date" nombre="fecha" />

      <button type="submit" className="boton">Guardar atención</button>
    </form>
  )
}

export default FormularioFicha
