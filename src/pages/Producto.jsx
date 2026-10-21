import { useParams } from 'react-router-dom';

import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import GaleriaProductos from '../components/organisms/GaleriaProductos';

import { itemsMenu } from '../data/navegacion';

function Producto({ productos, onAgregarCarrito }) {
  // id que viene en la ruta, ej: /producto/2
  const { id } = useParams();

  const producto = productos.find((p) => p.id === Number(id));

  if (producto === undefined) {
    return (
      <Pagina itemsMenu={itemsMenu}>
        <Seccion id="producto" titulo={"Producto no encontrado"}>
          <p className="texto-seccion">El producto que buscas no existe.</p>
        </Seccion>
      </Pagina>
    )
  }

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="producto" titulo={"Detalle del producto"}>
        <GaleriaProductos productos={[producto]} onAgregar={onAgregarCarrito} mostrarDetalle={false} />

        <p className="texto-seccion">Categoría: {producto.categoria}</p>
      </Seccion>

    </Pagina>
  )
}

export default Producto