import { useState } from 'react';

import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';
import FormularioProducto from '../components/FormularioProducto';
import ListaProductos from '../components/ListaProductos';
import BotonCerrarSesion from '../components/BotonCerrarSesion';

import { itemsMenu } from '../data/navegacion';

function PanelAdmin({ productos, onAgregarProducto, onModificarProducto, onEliminarProducto }) {
  // producto que se esta editando (null = no se esta editando ninguno)
  const [productoEditando, setProductoEditando] = useState(null);

  const modificar = (productoModificado) => {
    onModificarProducto(productoModificado);
    setProductoEditando(null);
  }

  const eliminar = (producto) => {
    onEliminarProducto(producto.id);
    alert(producto.titulo + " eliminado del catálogo");
  }

  return (
    <Pagina itemsMenu={itemsMenu}>

      {/* si no se esta editando, se muestra el formulario para agregar */}
      {productoEditando === null && (
        <Seccion id="nuevo-producto" titulo={"Agregar producto"}>
          <p className="texto-seccion">Los productos nuevos se agregan al catálogo con una imagen genérica.</p>

          <FormularioProducto onAgregar={onAgregarProducto} />
        </Seccion>
      )}

      {/* si se esta editando, se muestra el formulario con los datos del producto */}
      {productoEditando !== null && (
        <Seccion id="modificar-producto" titulo={"Modificar producto"}>
          <FormularioProducto producto={productoEditando} onModificar={modificar}
            onCancelar={() => setProductoEditando(null)} />
        </Seccion>
      )}

      <Seccion id="lista-productos" titulo={"Productos del catálogo"}>
        {/* mientras se edita un producto no se muestran los botones editar y eliminar */}
        {productoEditando === null && (
          <ListaProductos productos={productos} onEditar={setProductoEditando} onEliminar={eliminar} />
        )}

        {productoEditando !== null && (
          <ListaProductos productos={productos} />
        )}

        <BotonCerrarSesion />
      </Seccion>

    </Pagina>
  )
}

export default PanelAdmin