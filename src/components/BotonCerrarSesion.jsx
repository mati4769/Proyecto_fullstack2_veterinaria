import Button from 'react-bootstrap/Button'

function BotonCerrarSesion() {
  const cerrar = () => {
    localStorage.removeItem("sesion")
    alert("Sesión cerrada")
    window.location.href = "/login"
  }

  return (
    <Button className="boton" type="button" onClick={cerrar}>
      Cerrar sesión
    </Button>
  )
}

export default BotonCerrarSesion