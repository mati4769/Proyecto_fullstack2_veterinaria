function ReporteFicha({ fichas }) {
  const hoy = new Date();
  const esteMes = fichas.filter(function (f) {
      const d = new Date(f.fecha);
      return d.getMonth() === hoy.getMonth() && d.getFullYear() === hoy.getFullYear();
  }).length;

  return (
    <p className="texto-seccion" id="textoReporte">
      Total de atenciones registradas: {fichas.length}. Atenciones este mes: {esteMes}.
    </p>
  )
}

export default ReporteFicha
