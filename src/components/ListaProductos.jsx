function ListaProductos({ productos, onQuitar, onEditar, onEliminar }) {
  return (
    <ul className="lista-simple">
      {productos.map((producto, i) => (
        <li key={i}>
          {producto.titulo} - ${producto.precio} CLP{" "}

          {/* el boton quitar solo aparece si se envia onQuitar (en el carrito) */}
          {onQuitar && (
            <button type="button" className="boton-mini" onClick={() => onQuitar(i)}>
              Quitar
            </button>
          )}

          {/* los botones editar y eliminar solo aparecen en el panel admin */}
          {onEditar && (
            <button type="button" className="boton-mini" onClick={() => onEditar(producto)}>
              Editar
            </button>
          )}{" "}

          {onEliminar && (
            <button type="button" className="boton-mini" onClick={() => onEliminar(producto)}>
              Eliminar
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ListaProductos