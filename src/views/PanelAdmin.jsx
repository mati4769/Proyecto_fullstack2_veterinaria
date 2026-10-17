import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';
import FormularioProducto from '../components/FormularioProducto';
import ListaProductos from '../components/ListaProductos';
import BotonCerrarSesion from '../components/BotonCerrarSesion';

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