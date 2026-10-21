import { useState } from 'react'
import { Link } from 'react-router-dom'

function TarjetaProducto({ id, imagen, titulo, descripcion, precio, onAgregar, mostrarDetalle = true }) {
  const [favorito, setFavorito] = useState(false)

  const alternarFavorito = () => {
    if (favorito === false)
      setFavorito(true)
    else
      setFavorito(false)
  }

  return (
    <div className="tarjeta">
      <div className="espacio-imagen2">
        <img src={imagen} alt={titulo} />
      </div>
      <h3 className="titulo-tarjeta">{titulo}</h3>
      <p className="texto-tarjeta">{descripcion}</p>
      <p className="precio-tarjeta">${precio} CLP</p>

      <button type="button" className="boton-mini" onClick={alternarFavorito}>
        {favorito ? '★ Favorito' : '☆ Agregar a favoritos'}
      </button>

      <button type="button" className="boton-mini" onClick={onAgregar}>
        Agregar al carrito
      </button>

      {/* en la vista de detalle no se muestra el link a si mismo */}
      {mostrarDetalle && (
        <p>
          <Link to={"/producto/" + id} className="enlace-detalle">Ver detalle</Link>
        </p>
      )}
    </div>
  )
}

export default TarjetaProducto