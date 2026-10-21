import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import FormularioRegistro from '../components/organisms/FormularioRegistro';

import { itemsMenu } from '../data/navegacion';

function Registro() {

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="registro" titulo={"Registro de usuario"}>
        <FormularioRegistro />
      </Seccion>

    </Pagina>
  )
}

export default Registro