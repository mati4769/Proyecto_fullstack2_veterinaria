function GaleriaEquipo({ fotos }) {
  return (
    <div className="galeria">
      {fotos.map((foto) => (
        <div key={foto.id} className="espacio-imagen">
          <img src={foto.imagen} alt={foto.alt} />
        </div>
      ))}
    </div>
  )
}

export default GaleriaEquipo
