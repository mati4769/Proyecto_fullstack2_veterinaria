function ListaCitas({ citas, onCancelar }) {
  return (
    <ul id="listaCitas" className="lista-simple">
      {citas.map((cita, i) => (
        <li key={i}>
          {cita.fecha} {cita.hora} - {cita.mascota} ({cita.dueno}) - {cita.motivo}{" "}
          <button type="button" className="boton-mini" onClick={() => onCancelar(i)}>
            Cancelar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaCitas
