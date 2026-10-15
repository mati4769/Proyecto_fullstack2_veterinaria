import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';
import FormularioRegistro from '../components/FormularioRegistro';

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