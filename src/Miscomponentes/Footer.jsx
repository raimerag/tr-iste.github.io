export default Footer;
function Footer() {
  return (
    <footer className="footer seccion">
      <div className="contenedor contendor-footer">
        <nav className="navegacion">
          <a href="nosotros.html">Nosotros</a>
          <a href="anuncios.html">Anuncios</a>
          <a href="blog.html">Blog</a>
          <a href="contacto.html">Contacto</a>
        </nav>
      </div>
      <p className="copyright">Todos los Derechos Reservados 2021&copy;</p>
    </footer>
  );
}
