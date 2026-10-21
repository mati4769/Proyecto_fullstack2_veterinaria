function DatosClinica({ datos }) {
  return (
    <div className="dato-clinica">
      {datos.map((dato) => (
        <div key={dato.id}>
          <strong>{dato.numero}</strong>{dato.texto}
        </div>
      ))}
    </div>
  )
}

export default DatosClinica
