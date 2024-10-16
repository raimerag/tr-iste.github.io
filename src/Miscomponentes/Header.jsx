export default Header;
function Header() {
  return (
    <>
      <header className="header inicio">
        <div className="contenido-header">
          <div className="barra">
            <h2>
              <a className="titulo-logo" href="#">
                Estructuras Metalicas <span className="logo">GS</span>
              </a>
            </h2>

            <nav className="navegacion">
              <a href="nosotros.html">Nosotros</a>
              <a href="anuncios.html">Anuncios</a>
              <a href="contacto.html">Contacto</a>
            </nav>
          </div>
        </div>
        <h1>Confeccion y Ventas de Estructuras Metalicas</h1>
      </header>
    </>
  );
}
