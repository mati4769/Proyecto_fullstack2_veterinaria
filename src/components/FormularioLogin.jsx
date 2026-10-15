import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Campo from './Campo'

import { regexCorreo, mensajeCorreo, regexContra, mensajeContra } from '../data/validaciones'

function FormularioLogin() {
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

    // si todas las validaciones pasan
    alert("formulario enviado correctamente")
    setCorreo("")
    setContra("")
  }

  return (
    <Form>
      <Campo id="formCorreo" etiqueta="Correo electronico :" tipo="email"
        placeholder="usuario@gmail.com" valor={correo} onCambio={setCorreo} />

      <Campo id="formContra" etiqueta="Contraseña :" tipo="password"
        placeholder="Ingrese su contraseña" valor={contra} onCambio={setContra} />

      <Button className="boton-formulario" type="button" onClick={enviar}>
        ENVIAR
      </Button>

      <p className="enlace-secundario">
        <a href="/registro" className="enlace-login">¿No tienes cuenta? Regístrate</a>
      </p>
    </Form>
  )
}

export default FormularioLogin