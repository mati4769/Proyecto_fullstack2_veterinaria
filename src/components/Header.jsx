function Header({logo, titulo, subtitulo, itemsMenu}) {
  return (
    <>
        <header id="encabezado" className="encabezado">
            <img src={logo} alt="Logotipo" className="logo" />
            <h1 className="titulo-marca">{titulo}</h1>
            <p className="subtitulo-marca">{subtitulo}</p>

            <nav id="menu-principal">
                <ul className="menu-lista">
                    {
                        itemsMenu.map((item) => (
                            <li key={item.href}><a href={item.href} className="enlace-menu">{item.label}</a></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
