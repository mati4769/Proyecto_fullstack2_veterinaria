function ListaProductos({ productos, onQuitar }) {
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
        </li>
      ))}
    </ul>
  )
}

export default ListaProductos