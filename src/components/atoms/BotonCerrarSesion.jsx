import { useNavigate } from 'react-router-dom'

function BotonCerrarSesion() {
  const navigate = useNavigate()
  const cerrar = () => {
    localStorage.removeItem("sesion")
    alert("Sesión cerrada")
    navigate("/login")
  }

  return (
    <button className="boton" type="button" onClick={cerrar}>
      Cerrar sesión
    </button>
  )
}

export default BotonCerrarSesion