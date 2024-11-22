{
  /*Impedindo a Renderização até uma Condição (19):

Neste caso, o foco é em não renderizar o componente ou conteúdo nenhum até que uma condição específica seja satisfeita.*/
}
// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";

const RenderIfTrue = () => {
  const [shouldRender, setShouldRender] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShouldRender(!shouldRender);
        }}
      >{
        shouldRender ? 'Não renderizar' : 'Renderizar'
      }</button>

      {
        shouldRender && <p>Congratulations !!! The content is available.</p>
      }
    </>
  );
};

export default RenderIfTrue;