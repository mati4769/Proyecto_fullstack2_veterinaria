import Campo from './Campo'
import CampoSelect from './CampoSelect'
import GrupoModalidad from './GrupoModalidad'

import { opcionesServicio } from '../data/opciones'

function FormularioRegistro() {

  const validar = (event) => {
    event.preventDefault();

    const formulario = event.target;
    const nombre = formulario.elements.nombre;
    const apellido = formulario.elements.apellido;
    const correo = formulario.elements.correo;
    const fono = formulario.elements.fono;
    const fenac = formulario.elements.fenac;
    const especialidad = formulario.elements.especialidad;
    const modalidad = formulario.elements.modalidad;
    const contra = formulario.elements.contrasena;
    const confirmar = formulario.elements.confirmar;

    // 1 nombre: obligatorio, solo letras
    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre.value)){
        alert("El nombre debe contener solo letras");
        nombre.focus();
        return;
    }

    // 2 apellido: obligatorio, solo letras
    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido.value)){
        alert("El apellido debe contener solo letras");
        apellido.focus();
        return;
    }

    // 3 correo
    if(!/^[\w.+-]+@(gmail|outlook|duocuc)\.(com|cl)$/i.test(correo.value)){
        alert("El correo debe ser de dominio @gmail, @outlook o @duocuc, junto al .com");
        correo.focus();
        return;
    }

    // 4 telefono: obligatorio, solo numeros (con opcion de +56 adelante)
    if(!/^\+?\d{8,12}$/.test(fono.value)){
        alert("El telefono debe contener solo numeros, ejemplo: +56912345678");
        fono.focus();
        return;
    }

    // 5 Calculo de edad exacta considerando día y mes
    let fechaNacimiento = new Date(fenac.value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad < 18) {
        alert("Debes ser mayor de 18 años para registrarte");
        fenac.focus();
        return;
    }

    // 6 especialidad: obligatoria
    if(especialidad.value === ""){
        alert("Debe seleccionar un servicio de interes");
        especialidad.focus();
        return;
    }

    // 7 modalidad de atencion: obligatorio elegir una opcion
    let modalidadSeleccionada = false;
    for(let i = 0; i < modalidad.length; i++){
        if(modalidad[i].checked){
            modalidadSeleccionada = true;
        }
    }
    if(!modalidadSeleccionada){
        alert("Debe seleccionar una modalidad de atencion");
        modalidad[0].focus();
        return;
    }

    // 8 contraseña: minimo 8 caracteres, mayuscula, minuscula y numero
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(contra.value)){
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número");
        contra.focus();
        return;
    }

    // 9 confirmar contraseña: debe coincidir
    if(confirmar.value !== contra.value){
        alert("Las contraseñas no coinciden");
        confirmar.focus();
        return;
    }

    // si todas las validaciones pasan
    alert("Registro realizado correctamente");
    formulario.reset();
  }

  return (
    <form id="registro" className="formulario-registro" onSubmit={validar}>
      <fieldset className="ficha-registro">
        <legend className="titulo-formulario">Registro de usuario</legend>

        <Campo etiqueta="Nombre :" nombre="nombre" placeholder="Ingrese su nombre" />

        <Campo etiqueta="Apellido :" nombre="apellido" placeholder="Ingrese su apellido" />

        <Campo etiqueta="Correo electronico :" tipo="email" nombre="correo" placeholder="usuario@gmail.com" />

        <Campo etiqueta="Telefono :" tipo="tel" nombre="fono" placeholder="+56912345678" />

        <Campo etiqueta="Fecha de nacimiento :" tipo="date" nombre="fenac" />

        <CampoSelect
          etiqueta="Servicio de interes :"
          nombre="especialidad"
          textoInicial="-- SELECCIONE UNA OPCION --"
          opciones={opcionesServicio}
        />

        <GrupoModalidad />

        <Campo
          etiqueta="Contraseña :"
          tipo="password"
          nombre="contrasena"
          placeholder="Ingrese su contraseña"
          patron="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}"
          titulo="Debe tener almenos 8 caracteres, una mayúscula, una minúscula y un número"
        />

        <Campo etiqueta="Confirmar contraseña :" tipo="password" nombre="confirmar" placeholder="Repita su contraseña" />

        <button type="submit" className="boton-formulario">REGISTRARSE</button>
      </fieldset>

      <p className="enlace-secundario">
        <a href="/login" className="enlace-registro">¿Ya tienes cuenta? Inicia sesión</a>
      </p>
      <p className="enlace-secundario">
        <a href="/" className="enlace-registro">Volver a la página principal</a>
      </p>
    </form>
  )
}

export default FormularioRegistro
