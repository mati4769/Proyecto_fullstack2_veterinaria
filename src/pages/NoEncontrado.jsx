import { Link } from 'react-router-dom';

import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';

import { itemsMenu } from '../data/navegacion';

function NoEncontrado() {

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="error" titulo={"Error 404"}>
        <p className="texto-seccion">La página que buscas no existe.</p>
        <Link to="/" className="boton">Volver al inicio</Link>
      </Seccion>

    </Pagina>
  )
}

export default NoEncontrado