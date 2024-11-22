// eslint-disable-next-line no-unused-vars
import React from "react";
import PropsTest from "./components/PropsTest";
import ConditionalRendering from "./components/RenderCond";
import cup from "./img/cup.jpg";
import "./App.css";
import RenderManyElem from "./components/RenderManyElemB";
import Relogio from "./components/LifeCycle";

const HelloWord = () => {
  return (
    <>
      {/*No elemento pai, colocamos os dados/info*/}
        <PropsTest text={"lorem"} />
        <img src={cup} width={200} alt="Cup" />
        <ConditionalRendering />
        <RenderManyElem />
        <Relogio />
    </>
  );
};

export default HelloWord;
