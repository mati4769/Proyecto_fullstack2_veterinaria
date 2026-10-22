import imgPeso from '../assets/img/control_de_peso.jpg';
import imgConsulta from '../assets/img/consulta_general.jpg';
import imgVacuna from '../assets/img/vacunacion.jpg';
import imgDesparasitacion from '../assets/img/desparasitacion.jpg';
import imgGenerica from '../assets/img/logotipo.jpg';

//imagen por defecto para los productos nuevos del panel admin
export { imgGenerica }

//arreglo inicial de productos (servicios de la clinica con precio)
export const productosIniciales = [
        {
          id: 1,
          imagen: imgConsulta,
          titulo: "Consulta general",
          descripcion: "Examen y diagnóstico con nuestros médicos veterinarios.",
          precio: 15000,
          categoria: "Atención"
        },
        {
          id: 2,
          imagen: imgVacuna,
          titulo: "Vacunación",
          descripcion: "Historial de vacunas al día para perros, gatos y más.",
          precio: 12000,
          categoria: "Prevención"
        },
        {
          id: 3,
          imagen: imgGenerica,
          titulo: "Cirugía menor",
          descripcion: "Procedimientos quirúrgicos simples con anestesia.",
          precio: 60000,
          categoria: "Atención"
        },
        {
          id: 4,
          imagen: imgDesparasitacion,
          titulo: "Desparasitación",
          descripcion: "Tratamientos preventivos internos y externos.",
          precio: 8000,
          categoria: "Prevención"
        },
        {
          id: 5,
          imagen: imgPeso,
          titulo: "Control de peso",
          descripcion: "Seguimiento periódico del peso de tu mascota.",
          precio: 10000,
          categoria: "Prevención"
        }
      ]