import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Campo from './Campo'
import CampoSelect from './CampoSelect'

import { opcionesServicio, opcionesEspecie } from '../data/opciones'
import { regexCorreo, mensajeCorreo, regexContra, mensajeContra, regexSoloLetras } from '../data/validaciones'

function FormularioRegistro() {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [fono, setFono] = useState("")
  const [fenac, setFenac] = useState("")
  const [mascota, setMascota] = useState("")
  const [especie, setEspecie] = useState("")
  const [especialidad, setEspecialidad] = useState("")
  const [modalidad, setModalidad] = useState("")
  const [contra, setContra] = useState("")
  const [confirmar, setConfirmar] = useState("")

  const enviar = () => {
    // 1 nombre: obligatorio, solo letras
    if (!regexSoloLetras.test(nombre)) {
      alert("El nombre debe contener solo letras")
      return
    }

    // 2 apellido: obligatorio, solo letras
    if (!regexSoloLetras.test(apellido)) {
      alert("El apellido debe contener solo letras")
      return
    }

    // 3 correo
    if (!regexCorreo.test(correo)) {
      alert(mensajeCorreo)
      return
    }

    // 4 telefono: obligatorio, solo numeros (con opcion de +56 adelante)
    if (!/^\+?\d{8,12}$/.test(fono)) {
      alert("El telefono debe contener solo numeros, ejemplo: +56912345678")
      return
    }

    // 5 fecha de nacimiento: obligatoria
    if (fenac === "") {
      alert("Debe ingresar su fecha de nacimiento")
      return
    }

    // 6 Calculo de edad exacta considerando día y mes
    let fechaNacimiento = new Date(fenac)
    let hoy = new Date()
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let mes = hoy.getMonth() - fechaNacimiento.getMonth()

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--
    }

    if (edad < 18) {
      alert("Debes ser mayor de 18 años para registrarte")
      return
    }

    // 7 nombre de la mascota: obligatorio, solo letras
    if (!regexSoloLetras.test(mascota)) {
      alert("El nombre de la mascota debe contener solo letras")
      return
    }

    // 8 especie de la mascota: obligatoria
    if (especie === "") {
      alert("Debe seleccionar la especie de su mascota")
      return
    }

    // 9 especialidad: obligatoria
    if (especialidad === "") {
      alert("Debe seleccionar un servicio de interes")
      return
    }

    // 10 modalidad de atencion: obligatorio elegir una opcion
    if (modalidad === "") {
      alert("Debe seleccionar una modalidad de atencion")
      return
    }

    // 11 contraseña: minimo 8 caracteres, mayuscula, minuscula y numero
    if (!regexContra.test(contra)) {
      alert(mensajeContra)
      return
    }

    // 12 confirmar contraseña: debe coincidir
    if (confirmar !== contra) {
      alert("Las contraseñas no coinciden")
      return
    }

    // si todas las validaciones pasan
    alert("Registro realizado correctamente")
    setNombre("")
    setApellido("")
    setCorreo("")
    setFono("")
    setFenac("")
    setMascota("")
    setEspecie("")
    setEspecialidad("")
    setModalidad("")
    setContra("")
    setConfirmar("")
  }

  return (
    <div>
      <Campo id="formNombre" etiqueta="Nombre :"
        placeholder="Ingrese su nombre" valor={nombre} onCambio={setNombre} />

      <Campo id="formApellido" etiqueta="Apellido :"
        placeholder="Ingrese su apellido" valor={apellido} onCambio={setApellido} />

      <Campo id="formCorreo" etiqueta="Correo electronico :" tipo="email"
        placeholder="usuario@gmail.com" valor={correo} onCambio={setCorreo} />

      <Campo id="formFono" etiqueta="Telefono :" tipo="tel"
        placeholder="+56912345678" valor={fono} onCambio={setFono} />

      <Campo id="formFenac" etiqueta="Fecha de nacimiento :" tipo="date"
        valor={fenac} onCambio={setFenac} />

      <Campo id="formMascota" etiqueta="Nombre de su mascota :"
        placeholder="Ej: Toby" valor={mascota} onCambio={setMascota} />

      <CampoSelect id="formEspecie" etiqueta="Especie de su mascota :"
        textoInicial="-- SELECCIONE UNA OPCION --" opciones={opcionesEspecie}
        valor={especie} onCambio={setEspecie} />

      <CampoSelect id="formEspecialidad" etiqueta="Servicio de interes :"
        textoInicial="-- SELECCIONE UNA OPCION --" opciones={opcionesServicio}
        valor={especialidad} onCambio={setEspecialidad} />

      <Form.Group className="grupo-campo">
        <Form.Label className="etiqueta-campo">Modalidad de atencion preferida :</Form.Label>
        <div className="grupo-radio">
          <Form.Check
            type="radio"
            id="modalidad-presencial"
            name="modalidad"
            label="Presencial"
            checked={modalidad === "presencial"}
            onChange={() => setModalidad("presencial")}
          />
          <Form.Check
            type="radio"
            id="modalidad-online"
            name="modalidad"
            label="Online"
            checked={modalidad === "online"}
            onChange={() => setModalidad("online")}
          />
        </div>
      </Form.Group>

      <Campo id="formContra" etiqueta="Contraseña :" tipo="password"
        placeholder="Ingrese su contraseña" valor={contra} onCambio={setContra} />

      <Campo id="formConfirmar" etiqueta="Confirmar contraseña :" tipo="password"
        placeholder="Repita su contraseña" valor={confirmar} onCambio={setConfirmar} />

      <Button className="boton-formulario" type="button" onClick={enviar}>
        REGISTRARSE
      </Button>

      <p className="enlace-secundario">
        <a href="/login" className="enlace-registro">¿Ya tienes cuenta? Inicia sesión</a>
      </p>
      <p className="enlace-secundario">
        <a href="/" className="enlace-registro">Volver a la página principal</a>
      </p>
    </div>
  )
}

export default FormularioRegistro