function BotonCerrarSesion() {
  const cerrar = () => {
    localStorage.removeItem("sesion")
    alert("Sesión cerrada")
    window.location.href = "/login"
  }

  return (
    <button className="boton" type="button" onClick={cerrar}>
      Cerrar sesión
    </button>
  )
}

export default BotonCerrarSesion