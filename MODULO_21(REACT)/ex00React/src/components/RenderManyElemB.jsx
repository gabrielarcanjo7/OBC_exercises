// eslint-disable-next-line no-unused-vars
import React from "react";
import Fruta from "./comp1R"; // Corrija o caminho para apontar corretamente para o arquivo de `Item`
import { Link } from "react-router-dom";

const frutas = ["Maçã", "Banana", "Laranja"];

const RenderManyElem = () => {
  return (
    <>
      <h1>Renderizando vários elementos!</h1>
      {frutas.map((fruta, index) => (
        <Fruta key={index} nome={fruta} />
      ))}
     
      <Link to='/'> Home </Link> 
      <Link to='/time'> Next... </Link>
    </>
  );
};

export default RenderManyElem;
