// Una vacuna dura 1 año. Si falta menos de 30 dias para el año, avisamos.
function estadoVacuna(fecha) {
    const vence = new Date(fecha);
    vence.setDate(vence.getDate() + 365);
    const diasRestantes = Math.round((vence - new Date()) / (1000 * 60 * 60 * 24));

    if (diasRestantes <= 30) {
        return " ⚠ Vacuna vence el " + vence.toISOString().slice(0, 10);
    }
    return "";
}

function ListaFichas({ fichas }) {
  return (
    <ul id="listaFichas" className="lista-simple">
      {fichas.map((f, i) => (
        <li key={i}>
          {f.fecha + " - " + f.mascota + ": " + f.diagnostico +
            (f.medicamento ? " (" + f.medicamento + ")" : "") +
            (f.vacuna ? " - Vacuna: " + f.vacuna + estadoVacuna(f.fecha) : "")}
        </li>
      ))}
    </ul>
  )
}

export default ListaFichas
