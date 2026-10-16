import { Navigate } from 'react-router-dom'

// si no hay sesion guardada en localStorage, manda al login
function RutaPrivada({ children }) {
  const sesion = localStorage.getItem("sesion")

  if (sesion === null) {
    return <Navigate to="/login" />
  }

  return children
}

export default RutaPrivada