import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Seccion from '../components/Seccion';
import FormularioFicha from '../components/FormularioFicha';
import ListaFichas from '../components/ListaFichas';
import ReporteFicha from '../components/ReporteFicha';

import { clinica } from '../data/clinica';
import { fichasIniciales } from '../data/fichas';
import { itemsMenu } from '../data/navegacion';

function FichaClinica() {
  const [fichas, setFichas] = useState(fichasIniciales);

  const agregarFicha = (nuevaFicha) => {
    setFichas(fichas.concat(nuevaFicha));
  }

  return (
    <>
      <Header logo={clinica.logo} titulo={clinica.nombre} subtitulo={clinica.subtitulo}
        itemsMenu={itemsMenu} />

      <main id="contenido" className="contenido">

        <Seccion id="registrar" titulo={"Registrar atención"}>
          <p className="texto-seccion">Diagnóstico, medicamentos y vacunas quedan guardados en la ficha digital de la mascota, visible para cualquier médico.</p>

          <FormularioFicha onAgregar={agregarFicha} />
        </Seccion>

        <Seccion id="historial" titulo={"Historial de atenciones"}>
          <ListaFichas fichas={fichas} />
        </Seccion>

        <Seccion id="reporte" titulo={"Reporte"}>
          <ReporteFicha fichas={fichas} />
        </Seccion>

      </main>

      <Footer marca={clinica.nombre} ubicacion={clinica.ubicacion}
        contacto={clinica.contacto} copyright={clinica.copyright} />
    </>
  )
}

export default FichaClinica
