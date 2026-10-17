import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';

import { itemsMenu } from '../data/navegacion';

function NoEncontrado() {

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="error" titulo={"Error 404"}>
        <p className="texto-seccion">La página que buscas no existe.</p>
        <a href="/" className="boton">Volver al inicio</a>
      </Seccion>

    </Pagina>
  )
}

export default NoEncontrado