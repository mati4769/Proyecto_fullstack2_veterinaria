import Campo from './Campo'

function FormularioLogin() {

  const validar = (event) => {
    event.preventDefault();

    const formulario = event.target;
    const correo = formulario.elements.correo;
    const contra = formulario.elements.contrasena;

    // 1 correo
    if(!/^[\w.+-]+@(gmail|outlook|duocuc)\.(com|cl)$/i.test(correo.value)){
        alert("El correo debe ser de dominio @gmail, @outlook o @duocuc, junto al .com");
        correo.focus();
        return;
    }

    // 2 contra
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(contra.value)){
        alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número");
        contra.focus();
        return;
    }

    // si todas las validaciones pasan
    alert("formulario enviado correctamente");
    formulario.reset();
  }

  return (
    <form id="acceso" className="formulario-login" onSubmit={validar}>
      <fieldset className="ficha-login">
        <legend className="titulo-formulario">Inicio de sesión</legend>

        <Campo
          etiqueta="Correo electronico :"
          tipo="email"
          nombre="correo"
          placeholder="usuario@gmail.com"
        />

        <Campo
          etiqueta="Contraseña :"
          tipo="password"
          nombre="contrasena"
          placeholder="Ingrese su contraseña"
          patron="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}"
          titulo="Debe tener almenos 8 caracteres, una mayúscula, una minúscula y un número"
        />

        <button type="submit" className="boton-formulario">ENVIAR</button>
      </fieldset>

      <p className="enlace-secundario">
        <a href="/registro" className="enlace-login">¿No tienes cuenta? Regístrate</a>
      </p>
    </form>
  )
}

export default FormularioLogin
