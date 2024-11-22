{/*Renderização Condicional (18):

O objetivo aqui é mostrar conteúdos diferentes com base no estado.
Por exemplo, mostrar "Logado" ou "Deslogado" conforme o valor de um estado, como isLoggedIn.*/}

// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import RenderIfTrue from "./DontRender";

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <h1>Welcome to my website</h1> : <h1>Please Login!</h1>}
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    < RenderIfTrue />
    </>
  );
};

export default ConditionalRendering;

/* import React, { useState } from 'react';

const ConditionalRendering = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Bem-vindo!</h1> : <h1>Por favor, faça login.</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default ConditionalRendering; */
