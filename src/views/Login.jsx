import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';
import FormularioLogin from '../components/FormularioLogin';

import { itemsMenu } from '../data/navegacion';

function Login() {

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="login" titulo={"Inicio de sesión"}>
        <p className="texto-seccion">Debes iniciar sesión para usar ciertas funciones</p>
        <FormularioLogin />
      </Seccion>

    </Pagina>
  )
}

export default Login