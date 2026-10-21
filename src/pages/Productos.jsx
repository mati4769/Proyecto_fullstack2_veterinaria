import { useState } from 'react';

import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import CampoSelect from '../components/atoms/CampoSelect';
import GaleriaProductos from '../components/organisms/GaleriaProductos';

import { opcionesCategoria } from '../data/opciones';
import { itemsMenu } from '../data/navegacion';

function Productos({ productos, onAgregarCarrito }) {
  const [categoria, setCategoria] = useState("");

  // si no hay categoria elegida se muestran todos
  const productosFiltrados = productos.filter((producto) => categoria === "" || producto.categoria === categoria);

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="catalogo" titulo={"Nuestros productos"}>
        <p className="texto-seccion">Elige los servicios para tu mascota y agrégalos al carrito.</p>

        <CampoSelect id="filtroCategoria" etiqueta="Filtrar por categoría :" textoInicial="Todas"
          opciones={opcionesCategoria} valor={categoria} onCambio={setCategoria} />

        <GaleriaProductos productos={productosFiltrados} onAgregar={onAgregarCarrito} />
      </Seccion>

    </Pagina>
  )
}

export default Productos