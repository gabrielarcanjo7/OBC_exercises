// eslint-disable-next-line no-unused-vars
import React from "react";
import Fruta from "./comp1R"; // Corrija o caminho para apontar corretamente para o arquivo de `Item`

const frutas = ["Maçã", "Banana", "Laranja"];

const RenderManyElem = () => {
  return (
    <>
      <h1>Renderizando vários elementos!</h1>
      {frutas.map((fruta, index) => (
        <Fruta key={index} nome={fruta} />
      ))}
      <hr />
    </>
  );
};

export default RenderManyElem;
