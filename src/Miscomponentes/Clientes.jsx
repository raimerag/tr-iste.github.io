export default Clientes;

function Clientes() {
  return (
    <section className="seccion-obras">
      <h2>Nuestros Clientes </h2>

      <div className="contenedor-anuncios">
        <div className="clientes">
          <img src="./public" alt="anuncio" />
        </div>
        <div className="clientes">
          <img loading="lazy" src="build/img/Anuncio1.webp" alt="anuncio" />
        </div>
        <div className="clientes">
          <img loading="lazy" src="build/img/Anuncio1.webp" alt="anuncio" />
        </div>
        <div className="clientes">
          <img loading="lazy" src="build/img/Anuncio1.webp" alt="anuncio" />
        </div>
      </div>
    </section>
  );
}
