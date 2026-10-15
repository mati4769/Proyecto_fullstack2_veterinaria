function GrupoModalidad() {
  return (
    <>
      <label className="etiqueta-campo">Modalidad de atencion preferida :</label>
      <br />
      <div className="grupo-radio">
        <input type="radio" name="modalidad" id="modalidad-presencial" value="presencial" />
        <label htmlFor="modalidad-presencial" className="etiqueta-radio">Presencial</label>

        <input type="radio" name="modalidad" id="modalidad-online" value="online" />
        <label htmlFor="modalidad-online" className="etiqueta-radio">Online</label>
      </div>
      <br /><br />
    </>
  )
}

export default GrupoModalidad
