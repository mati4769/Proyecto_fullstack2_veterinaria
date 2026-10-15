import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import DatosClinica from '../components/DatosClinica';
import GaleriaEquipo from '../components/GaleriaEquipo';
import GaleriaServicios from '../components/GaleriaServicios';
import VideoCuidado from '../components/VideoCuidado';

import { clinica, datosClinica, equipo, videoCuidado } from '../data/clinica';
import { servicios } from '../data/servicios';
import { itemsMenuInicio } from '../data/navegacion';

function Home() {

  return (
    <>
      <Header logo={clinica.logo} titulo={clinica.nombre} subtitulo={clinica.subtitulo}
        itemsMenu={itemsMenuInicio} />

      <main id="contenido" className="contenido">

        <Seccion id="presentacion" titulo={"Bienvenido a Veterinaria San Marcos"}>
          <p className="texto-seccion">
            Somos una clínica veterinaria fundada en 2009 en Rancagua,
            Región del Libertador General Bernardo O'Higgins. Atendemos
            mascotas domésticas —principalmente perros y gatos, y también
            conejos y aves— con consulta general, vacunación, cirugía
            menor, desparasitación y control de peso.
          </p>

          <DatosClinica datos={datosClinica} />
        </Seccion>

        <Seccion id="nosotros" titulo={"Quiénes somos"}>
          <p className="texto-seccion">
            Nuestro equipo está formado por tres médicos veterinarios, un
            técnico veterinario y una recepcionista. Atendemos un promedio
            de 25 pacientes al día y acompañamos a cada mascota desde su
            primera consulta hasta sus controles periódicos.
          </p>

          <GaleriaEquipo fotos={equipo} />
        </Seccion>

        <Seccion id="especialidades" titulo={"Nuestros servicios"}>
          <GaleriaServicios servicios={servicios} />
        </Seccion>

        <Seccion id="video" titulo={"Aprende sobre el cuidado de tu mascota"}>
          <p className="texto-seccion">Antes de tu primera visita, este video te ayuda a entender qué esperar de una consulta en nuestra clínica.</p>

          <VideoCuidado src={videoCuidado} titulo={"Cuidado de mascotas"} />
        </Seccion>

      </main>

      <Footer marca={clinica.nombre} ubicacion={clinica.ubicacion}
        contacto={clinica.contacto} copyright={clinica.copyright} />
    </>
  )
}

export default Home
