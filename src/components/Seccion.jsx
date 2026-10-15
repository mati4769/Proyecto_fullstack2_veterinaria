function Seccion({id, titulo, children}) {
  return (
    <>
    <section id={id} className="seccion">
        <h2 className="titulo-seccion">{titulo}</h2>

        {children}
    </section>
    </>
  )
}

export default Seccion
