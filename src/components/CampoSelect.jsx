function CampoSelect({ etiqueta, nombre, textoInicial, opciones }) {
  return (
    <>
      <label htmlFor={nombre} className="etiqueta-campo">{etiqueta}</label>
      <select name={nombre} id={nombre} className="campo-input" required>
        <option value="">{textoInicial}</option>
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))}
      </select>
      <br /><br />
    </>
  )
}

export default CampoSelect
