import Header from '../components/Header';
import Footer from '../components/Footer';
import FormularioLogin from '../components/FormularioLogin';

import { clinica } from '../data/clinica';
import { itemsMenu } from '../data/navegacion';

function Login() {

  return (
    <>
      <Header logo={clinica.logo} titulo={clinica.nombre} subtitulo={clinica.subtitulo}
        itemsMenu={itemsMenu} />

      <main className="contenedor-login">
        <FormularioLogin />
      </main>

      <Footer marca={clinica.nombre} ubicacion={clinica.ubicacion}
        contacto={clinica.contacto} copyright={clinica.copyright} />
    </>
  )
}

export default Login
