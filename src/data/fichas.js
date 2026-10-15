function fechaTexto(dias) {
    const d = new Date();
    d.setDate(d.getDate() + dias);
    return d.toISOString().slice(0, 10);
}

//arreglo inicial de fichas clinicas
export const fichasIniciales = [
        { mascota: "Toby", diagnostico: "Control anual", medicamento: "", vacuna: "Antirrábica", fecha: fechaTexto(-340) },
        { mascota: "Michi", diagnostico: "Bajo de peso", medicamento: "Suplemento vitamínico", vacuna: "", fecha: fechaTexto(-15) }
      ]
