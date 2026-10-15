function TarjetaServicio({ imagen, titulo, descripcion }) {
  return (
    <div className="tarjeta">
      <div className="espacio-imagen2">
        <img src={imagen} alt={titulo} />
      </div>
      <h3 className="titulo-tarjeta">{titulo}</h3>
      <p className="texto-tarjeta">{descripcion}</p>
    </div>
  );
}

export default TarjetaServicio
