import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Citas from './pages/Citas'
import FichaClinica from './pages/FichaClinica'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Productos from './pages/Productos'
import Producto from './pages/Producto'
import PanelAdmin from './pages/PanelAdmin'
import Carrito from './pages/Carrito'
import MiPerfil from './pages/MiPerfil'
import NoEncontrado from './pages/NoEncontrado'
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