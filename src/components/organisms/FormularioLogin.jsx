import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'

import Campo from '../atoms/Campo'

import { regexCorreo, mensajeCorreo, regexContra, mensajeContra } from '../../data/validaciones'
import { usuarioAdmin } from '../../data/usuarios'

function FormularioLogin() {
  const navigate = useNavigate()
  const [correo, setCorreo] = useState("")
  const [contra, setContra] = useState("")

  const enviar = () => {
    // 1 correo
    if (!regexCorreo.test(correo)) {
      alert(mensajeCorreo)
      return
    }

    // 2 contra
    if (!regexContra.test(contra)) {
      alert(mensajeContra)
      return
    }

    // 3 credenciales: deben ser iguales a las del usuario guardado
    if (correo !== usuarioAdmin.correo || contra !== usuarioAdmin.contra) {
      alert("Correo o contraseña incorrectos")
      return
    }

    // si todo esta bien, se guarda la sesion y se entra al panel de control
    localStorage.setItem("sesion", correo)
    alert("Bienvenido, inicio de sesión correcto")
    navigate("/admin")
  }

  return (
    <div>
      <Campo id="formCorreo" etiqueta="Correo electronico :" tipo="email"
        placeholder="usuario@gmail.com" valor={correo} onCambio={setCorreo} />

      <Campo id="formContra" etiqueta="Contraseña :" tipo="password"
        placeholder="Ingrese su contraseña" valor={contra} onCambio={setContra} />

      <Button className="boton-formulario" type="button" onClick={enviar}>
        ENVIAR
      </Button>

      <p className="enlace-secundario">
        <Link to="/registro" className="enlace-login">¿No tienes cuenta? Regístrate</Link>
      </p>
    </div>
  )
}

export default FormularioLogin