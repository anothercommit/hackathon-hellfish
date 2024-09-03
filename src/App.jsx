import React, { useState } from "react";
import "./App.css";

//componentes
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";

function App() {
  const [latitud_altitud, setLatitud_altitud] = useState([]);
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
