// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import cup from "../img/cup.jpg";
import { Link } from "react-router-dom";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpar intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalo);
      console.log("oi");
    };
  }, []);

  return (
    <>
      <div id="img-local">
        <div id="hora">
          <p>A hora atual é: {hora}</p>

          <Link to="/"> Home </Link>
          <Link to="/uncontrolled-form"> Next... </Link>
        </div>

        <div id="img-hora">
          <img src={cup} alt="cup" />
        </div>
      </div>
    </>
  );
}

export default Relogio;
