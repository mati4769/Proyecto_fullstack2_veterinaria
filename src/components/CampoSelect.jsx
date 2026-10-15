import Form from 'react-bootstrap/Form'

function CampoSelect({ id, etiqueta, textoInicial, opciones, valor, onCambio }) {
  return (
    <Form.Group className="grupo-campo" controlId={id}>
      <Form.Label className="etiqueta-campo">{etiqueta}</Form.Label>
      <Form.Select
        className="campo-input"
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
      >
        <option value="">{textoInicial}</option>
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default CampoSelect