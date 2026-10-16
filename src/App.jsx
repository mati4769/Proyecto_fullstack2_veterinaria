import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Citas from './views/Citas'
import FichaClinica from './views/FichaClinica'
import Login from './views/Login'
import Registro from './views/Registro'
import RutaPrivada from './components/RutaPrivada'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/citas' element={<Citas />} />

      {/* ruta privada: solo entra si inicio sesion */}
      <Route path='/ficha-clinica' element={
        <RutaPrivada>
          <FichaClinica />
        </RutaPrivada>
      } />

      <Route path='/login' element={<Login />} />

      <Route path='/registro' element={<Registro />} />
    </Routes>
  )
}

export default App