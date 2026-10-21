import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';
import DatosPerfil from '../components/DatosPerfil';
import BotonCerrarSesion from '../components/BotonCerrarSesion';

import { usuarioAdmin } from '../data/usuarios';
import { itemsMenu } from '../data/navegacion';

function MiPerfil() {

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="perfil" titulo={"Mi perfil"}>
        <DatosPerfil usuario={usuarioAdmin} />

        <BotonCerrarSesion />
      </Seccion>

    </Pagina>
  )
}

export default MiPerfil