import TarjetaProducto from './TarjetaProducto'

function GaleriaProductos({ productos, onAgregar, mostrarDetalle = true }) {
  return (
    <div className="galeria">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          id={producto.id}
          imagen={producto.imagen}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          precio={producto.precio}
          onAgregar={() => onAgregar(producto)}
          mostrarDetalle={mostrarDetalle}
        />
      ))}
    </div>
  )
}

export default GaleriaProductos