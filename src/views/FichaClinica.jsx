import { useState } from 'react';

import Pagina from '../components/Pagina';
import Seccion from '../components/Seccion';
import FormularioFicha from '../components/FormularioFicha';
import ListaFichas from '../components/ListaFichas';
import ReporteFicha from '../components/ReporteFicha';

import { fichasIniciales } from '../data/fichas';
import { itemsMenu } from '../data/navegacion';

function FichaClinica() {
  const [fichas, setFichas] = useState(fichasIniciales);

  const agregarFicha = (nuevaFicha) => {
    setFichas(fichas.concat(nuevaFicha));
  }

  return (
    <Pagina itemsMenu={itemsMenu}>

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

    </Pagina>
  )
}

export default FichaClinica