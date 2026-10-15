import Header from './Header'
import Footer from './Footer'

import { clinica } from '../data/clinica'

function Pagina({ itemsMenu, children }) {
  return (
    <>
      <Header logo={clinica.logo} titulo={clinica.nombre} subtitulo={clinica.subtitulo}
        itemsMenu={itemsMenu} />

      {children}

      <Footer marca={clinica.nombre} ubicacion={clinica.ubicacion}
        contacto={clinica.contacto} copyright={clinica.copyright} />
    </>
  )
}

export default Pagina