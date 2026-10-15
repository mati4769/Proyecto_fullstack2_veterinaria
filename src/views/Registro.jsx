import Header from '../components/Header';
import Footer from '../components/Footer';
import FormularioRegistro from '../components/FormularioRegistro';

import { clinica } from '../data/clinica';
import { itemsMenu } from '../data/navegacion';

function Registro() {

  return (
    <>
      <Header logo={clinica.logo} titulo={clinica.nombre} subtitulo={clinica.subtitulo}
        itemsMenu={itemsMenu} />

      <main className="contenedor-registro">
        <FormularioRegistro />
      </main>

      <Footer marca={clinica.nombre} ubicacion={clinica.ubicacion}
        contacto={clinica.contacto} copyright={clinica.copyright} />
    </>
  )
}

export default Registro
