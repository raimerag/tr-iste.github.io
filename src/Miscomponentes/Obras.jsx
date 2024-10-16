export default Anuncios;
function Anuncios() {
  return (
    <section className="seccion-obras">
      <h2>Algunas Obras Realizadas</h2>
      <div className="contenedor-anuncios">
        <div className="anuncio">
          <img loading="lazy" src="./src/img/instagram.jpg" alt="anuncio" />
          <h3>Primer Obra</h3>
          <p>
            casa en el lago con excelente vista, acabados de lujo a un excelente
            precio
          </p>

          <a href="anuncios.html" className="boton-amarillo-block">
            Ver Propiedad
          </a>
        </div>
        <div className="anuncio">
          <img loading="lazy" src="./src/img/instagram.jpg" alt="anuncio" />
          <h3>Primer Obra</h3>
          <p>
            casa en el lago con excelente vista, acabados de lujo a un excelente
            precio
          </p>

          <a href="anuncios.html" className="boton-amarillo-block">
            Ver Propiedad
          </a>
        </div>
        <div className="anuncio">
          <img loading="lazy" src="./src/img/instagram.jpg" alt="anuncio" />
          <h3>Primer Obra</h3>
          <p>
            casa en el lago con excelente vista, acabados de lujo a un excelente
            precio
          </p>

          <a href="anuncios.html" className="boton-amarillo-block">
            Ver Propiedad
          </a>
        </div>
      </div>

      <div className="alinear-derecha">
        <a href="anuncios.html" className="boton-verde">
          Ver Todas
        </a>
      </div>
    </section>
  );
}
