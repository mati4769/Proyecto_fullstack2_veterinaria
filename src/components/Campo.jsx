function Campo({ etiqueta, tipo = "text", nombre, placeholder, patron, titulo, requerido = true }) {
  return (
    <>
      <label htmlFor={nombre} className="etiqueta-campo">{etiqueta}</label>
      <input
        type={tipo}
        name={nombre}
        id={nombre}
        className="campo-input"
        placeholder={placeholder}
        pattern={patron}
        title={titulo}
        required={requerido}
      />
      <br /><br />
    </>
  )
}

export default Campo
