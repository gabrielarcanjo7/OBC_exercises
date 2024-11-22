import React from "react";
import CurrentDate from "./CurrentDate";

const PropsTest = (props) => {

  const littleAlert = () => {
    alert("test alert");
    //alert não precisa de return!
  };

  return (
    <>
      <h3>
        {props.text}; and, the date today is <CurrentDate handleClick={littleAlert}/>
      </h3>
      <hr />
    </>
    // parâmetro "props" é no elemento filho!
  );
};

export default PropsTest;
