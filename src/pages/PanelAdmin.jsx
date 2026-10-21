import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import FormularioProducto from '../components/organisms/FormularioProducto';
import ListaProductos from '../components/molecules/ListaProductos';
import BotonCerrarSesion from '../components/atoms/BotonCerrarSesion';

import { itemsMenu } from '../data/navegacion';

function PanelAdmin({ productos, onAgregarProducto }) {

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="nuevo-producto" titulo={"Agregar producto"}>
        <p className="texto-seccion">Los productos nuevos se agregan al catálogo con una imagen genérica.</p>

        <FormularioProducto onAgregar={onAgregarProducto} />
      </Seccion>

      <Seccion id="lista-productos" titulo={"Productos del catálogo"}>
        <ListaProductos productos={productos} />

        <BotonCerrarSesion />
      </Seccion>

    </Pagina>
  )
}

export default PanelAdmin