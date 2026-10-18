//opciones del select del registro (value distinto al texto)
export const opcionesServicio = [
        { value: "general", label: "Consulta general" },
        { value: "vacunacion", label: "Vacunación" },
        { value: "cirugia", label: "Cirugía menor" },
        { value: "desparasitacion", label: "Desparasitación" },
        { value: "peso", label: "Control de peso" }
      ]

//opciones del select de especie en el registro (animales que atiende la clinica)
export const opcionesEspecie = [
        { value: "perro", label: "Perro" },
        { value: "gato", label: "Gato" },
        { value: "conejo", label: "Conejo" },
        { value: "ave", label: "Ave" },
        { value: "hamster", label: "Hámster" },
        { value: "cobayo", label: "Cobayo" },
        { value: "huron", label: "Hurón" },
        { value: "tortuga", label: "Tortuga" },
        { value: "otro", label: "Otro" }
      ]

//opciones del select de citas (value igual al texto)
export const opcionesMotivo = [
        { value: "Consulta general", label: "Consulta general" },
        { value: "Vacunación", label: "Vacunación" },
        { value: "Cirugía menor", label: "Cirugía menor" },
        { value: "Desparasitación", label: "Desparasitación" },
        { value: "Control de peso", label: "Control de peso" }
      ]

//opciones del select de categoria (panel admin y filtro de productos)
export const opcionesCategoria = [
        { value: "Atención", label: "Atención" },
        { value: "Prevención", label: "Prevención" }
      ]