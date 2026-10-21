import TarjetaServicio from "../molecules/TarjetaServicio"

function GaleriaServicios({ servicios }) {
  return (
    <div className="galeria">
      {servicios.map((servicio) => (
        <TarjetaServicio
          key={servicio.id}
          imagen={servicio.imagen}
          titulo={servicio.titulo}
          descripcion={servicio.descripcion}
        />
      ))}
    </div>
  )
}

export default GaleriaServicios
