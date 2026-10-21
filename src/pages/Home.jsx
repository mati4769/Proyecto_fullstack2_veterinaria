import Pagina from '../components/organisms/Pagina';
import Seccion from '../components/molecules/Seccion';
import DatosClinica from '../components/molecules/DatosClinica';
import GaleriaEquipo from '../components/organisms/GaleriaEquipo';
import GaleriaServicios from '../components/organisms/GaleriaServicios';
import VideoCuidado from '../components/atoms/VideoCuidado';

import { datosClinica, equipo, videoCuidado } from '../data/clinica';
import { servicios } from '../data/servicios';
import { itemsMenuInicio } from '../data/navegacion';

function Home() {

  return (
    <Pagina itemsMenu={itemsMenuInicio}>

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

    </Pagina>
  )
}

export default Home