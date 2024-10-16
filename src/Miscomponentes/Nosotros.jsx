export default Nosotros;

function Nosotros() {
  return (
    <main className="seccion-nosotros contenedor">
      <h2 className="centrar">Mas Sobre Nosotros</h2>
      <div className="contenido-nosotros">
        <div className="icono">
          <i className="fa-solid fa-link seticon"></i>
          <h3>Durabilidad</h3>
          <p>
            ofrecemos una durabilidad excepcional frente a factores climáticos
            adversos, plagas y corrosión, asegurando una vida útil prolongada y
            menor mantenimiento.
          </p>
        </div>
        <div className="icono">
          <i className="fa-solid fa-palette seticon"></i>
          <h3>Diseño</h3>
          <p>
            Las infraestructuras de acero se adaptan fácilmente a distintas
            configuraciones, lo cual permite crear espacios que se ajusten
            perfectamente a las necesidades, mejorando así la eficiencia
            operativa.
          </p>
        </div>
        <div className="icono">
          <i className="fa-solid fa-stopwatch seticon"></i>
          <h3>Tiempo</h3>
          <p>
            Consideramos que el tiempo es un recurso invaluable, y estructuras
            metálicas GS lo respetan. Su ensamble rápido y eficiente, permite
            que los proyectos se concluyan en plazos breves.
          </p>
        </div>
      </div>
    </main>
  );
}
