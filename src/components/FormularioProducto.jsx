import { useState } from 'react'
import Button from 'react-bootstrap/Button'

import Campo from './Campo'
import CampoSelect from './CampoSelect'

import { opcionesCategoria } from '../data/opciones'
import { imgGenerica } from '../data/productos'

function FormularioProducto({ onAgregar }) {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const [categoria, setCategoria] = useState("")

  const enviar = () => {
    // 1 nombre: obligatorio
    if (titulo === "") {
      alert("Debe ingresar el nombre del producto")
      return
    }

    // 2 descripcion: obligatoria
    if (descripcion === "") {
      alert("Debe ingresar una descripción")
      return
    }

    // 3 precio: obligatorio y mayor a 0
    if (precio === "" || Number(precio) <= 0) {
      alert("El precio debe ser mayor a 0")
      return
    }

    // 4 categoria: obligatoria
    if (categoria === "") {
      alert("Debe seleccionar una categoría")
      return
    }

    const nuevoProducto = {
      imagen: imgGenerica,
      titulo: titulo,
      descripcion: descripcion,
      precio: Number(precio),
      categoria: categoria
    }

    onAgregar(nuevoProducto)

    alert("Producto agregado al catálogo")
    setTitulo("")
    setDescripcion("")
    setPrecio("")
    setCategoria("")
  }

  return (
    <div>
      <Campo id="formTitulo" etiqueta="Nombre :" valor={titulo} onCambio={setTitulo} />

      <Campo id="formDescripcion" etiqueta="Descripción :" valor={descripcion} onCambio={setDescripcion} />

      <Campo id="formPrecio" etiqueta="Precio :" tipo="number" valor={precio} onCambio={setPrecio} />

      <CampoSelect id="formCategoria" etiqueta="Categoría :" textoInicial="-- Seleccione --"
        opciones={opcionesCategoria} valor={categoria} onCambio={setCategoria} />

      <Button className="boton" type="button" onClick={enviar}>
        Agregar producto
      </Button>
    </div>
  )
}

export default FormularioProducto