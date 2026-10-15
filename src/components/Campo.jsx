import Form from 'react-bootstrap/Form'

function Campo({ id, etiqueta, tipo = "text", placeholder, valor, onCambio }) {
  return (
    <Form.Group className="grupo-campo" controlId={id}>
      <Form.Label className="etiqueta-campo">{etiqueta}</Form.Label>
      <Form.Control
        className="campo-input"
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
      />
    </Form.Group>
  )
}

export default Campo