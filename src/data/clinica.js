import imgLogo from '../assets/img/logotipo.jpg';
import imgEquipo1 from '../assets/img/equipo1.jpg';
import imgEquipo2 from '../assets/img/equipo2.jpg';
import imgEquipo3 from '../assets/img/equipo3.jpg';
import videoCuidado from '../assets/videos/alimentacion_saludable.mp4';

//datos generales de la clinica (header y footer)
export const clinica = {
  logo: imgLogo,
  nombre: "Veterinaria San Marcos",
  subtitulo: "Clínica veterinaria en Rancagua",
  ubicacion: "Rancagua, Región del Libertador General Bernardo O'Higgins",
  contacto: "contacto@veterinariasanmarcos.cl | +56 9 0000 0000",
  copyright: "2026 Veterinaria San Marcos"
}

//arreglo datos de la clinica
export const datosClinica = [
        { id: 1, numero: "3", texto: "Médicos veterinarios" },
        { id: 2, numero: "25", texto: "Pacientes/día" },
        { id: 3, numero: "5", texto: "Servicios" },
        { id: 4, numero: "2009", texto: "Año de inicio" }
      ]

//arreglo fotos del equipo
export const equipo = [
        { id: 1, imagen: imgEquipo1, alt: "Médica veterinaria revisando a un perro" },
        { id: 2, imagen: imgEquipo2, alt: "Equipo veterinario curando a un gato" },
        { id: 3, imagen: imgEquipo3, alt: "Médico veterinario revisando a un perro" }
      ]

export { videoCuidado }