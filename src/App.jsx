import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Citas from './views/Citas'
import FichaClinica from './views/FichaClinica'
import Login from './views/Login'
import Registro from './views/Registro'
import Productos from './views/Productos'
import Producto from './views/Producto'
import PanelAdmin from './views/PanelAdmin'
import Carrito from './views/Carrito'
import MiPerfil from './views/MiPerfil'
import NoEncontrado from './views/NoEncontrado'
import RutaPrivada from './components/RutaPrivada'

import { productosIniciales } from './data/productos'

function App() {
  // estados compartidos entre varias paginas
  const [productos, setProductos] = useState(productosIniciales)
  const [carrito, setCarrito] = useState([])

  // panel admin
  const agregarProducto = (nuevoProducto) => {
    nuevoProducto.id = productos.length + 1
    setProductos(productos.concat(nuevoProducto))
  }

  // carrito
  const agregarAlCarrito = (producto) => {
    setCarrito(carrito.concat(producto))
    alert(producto.titulo + " agregado al carrito")
  }

  const quitarDelCarrito = (indice) => {
    setCarrito(carrito.filter((producto, i) => i !== indice))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/productos' element={<Productos productos={productos} onAgregarCarrito={agregarAlCarrito} />} />

      <Route path='/producto/:id' element={<Producto productos={productos} onAgregarCarrito={agregarAlCarrito} />} />

      <Route path='/carrito' element={<Carrito carrito={carrito} onQuitar={quitarDelCarrito} onVaciar={vaciarCarrito} />} />

      <Route path='/citas' element={<Citas />} />

      {/* rutas privadas: solo entra si inicio sesion */}
      <Route path='/ficha-clinica' element={
        <RutaPrivada>
          <FichaClinica />
        </RutaPrivada>
      } />

      <Route path='/admin' element={
        <RutaPrivada>
          <PanelAdmin productos={productos} onAgregarProducto={agregarProducto} />
        </RutaPrivada>
      } />

      <Route path='/perfil' element={
        <RutaPrivada>
          <MiPerfil />
        </RutaPrivada>
      } />

      <Route path='/login' element={<Login />} />

      <Route path='/registro' element={<Registro />} />

      {/* cualquier otra ruta muestra el error 404 */}
      <Route path='*' element={<NoEncontrado />} />
    </Routes>
  )
}

export default App