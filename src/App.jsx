import { useState } from "react";
import Header from "./Miscomponentes/Header";
import Nosotros from "./Miscomponentes/Nosotros";
import Obras from "./Miscomponentes/Obras";
import Footer from "./Miscomponentes/footer";
import Clientes from "./Miscomponentes/Clientes";

function App() {
  return (
    <>
      <Header />
      <Nosotros />
      <Obras />
      <Clientes />
      <Footer />
    </>
  );
}

export default App;
