function DatosPerfil({ usuario }) {
  return (
    <ul className="lista-simple">
      <li><strong>Nombre:</strong> {usuario.nombre}</li>
      <li><strong>Correo:</strong> {usuario.correo}</li>
      <li><strong>Rol:</strong> {usuario.rol}</li>
    </ul>
  )
}

export default DatosPerfil