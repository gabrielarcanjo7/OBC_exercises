// eslint-disable-next-line no-unused-vars
import React from "react";
import CurrentDate from "./CurrentDate";
import { Link } from "react-router-dom";
import "../App.css";

const PropsTest = (props) => {

  const littleAlert = () => {
    alert("test alert");
    //alert não precisa de return!
  };

  return (
    <>
      <h3 style={{marginBottom: "10px"}}>
        {props.text}; and, the date today is <CurrentDate handleClick={littleAlert}/>
      </h3>
      <Link to='/'> Previous... </Link> 
      <Link to='/conditional-rendering'> Next... </Link>
    </>
    // parâmetro "props" é no elemento filho!
  );
};

export default PropsTest;
