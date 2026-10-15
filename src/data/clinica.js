import imgLogo from '../assets/img/logotipo.jpg';
import imgDoctor1 from '../assets/img/fotodoctor1.jpg';
import imgDoctor2 from '../assets/img/fotodoctor2.jpg';
import imgDoctor3 from '../assets/img/fotodoctor3.jpg';
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
        { id: 1, imagen: imgDoctor1, alt: "Médico veterinario del equipo" },
        { id: 2, imagen: imgDoctor2, alt: "Médica veterinaria del equipo" },
        { id: 3, imagen: imgDoctor3, alt: "Consulta veterinaria" }
      ]

export { videoCuidado }
