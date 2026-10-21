import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import ListaProductos from '../components/molecules/ListaProductos';

import { itemsMenu } from '../data/navegacion';

function Carrito({ carrito, onQuitar, onVaciar }) {
  // suma de los precios de todo el carrito
  let total = 0;
  carrito.forEach((producto) => {
    total = total + producto.precio;
  });

  const pagar = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    alert("Pago realizado por $" + total + " CLP. ¡Gracias por tu compra!");
    onVaciar();
  }

  return (
    <Pagina itemsMenu={itemsMenu}>

      <Seccion id="carrito" titulo={"Carrito de compras"}>
        {carrito.length === 0 && <p className="texto-seccion">Tu carrito está vacío.</p>}

        <ListaProductos productos={carrito} onQuitar={onQuitar} />
      </Seccion>

      <Seccion id="resumen" titulo={"Resumen de pago"}>
        <p className="texto-seccion">Productos: {carrito.length}</p>
        <p className="texto-seccion">Total a pagar: ${total} CLP</p>

        <button className="boton" type="button" onClick={pagar}>
          Pagar
        </button>
      </Seccion>

    </Pagina>
  )
}

export default Carrito