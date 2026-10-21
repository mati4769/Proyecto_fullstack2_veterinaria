import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import DatosPerfil from '../components/molecules/DatosPerfil';
import BotonCerrarSesion from '../components/atoms/BotonCerrarSesion';

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