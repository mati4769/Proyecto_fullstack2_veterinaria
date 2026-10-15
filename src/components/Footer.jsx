function Footer({marca, ubicacion, contacto, copyright}) {
  return (
    <>
        <footer id="pie" className="pie">
            <p className="pie-marca">{marca}</p>
            <p className="pie-texto">{ubicacion}</p>
            <p className="pie-texto">{contacto}</p>
            <p className="pie-texto pie-copyright">&copy; {copyright}</p>
        </footer>
    </>
  )
}

export default Footer
