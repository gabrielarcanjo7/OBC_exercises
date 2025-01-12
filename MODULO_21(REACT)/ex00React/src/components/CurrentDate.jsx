// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const CurrentDate = ({handleClick}) => {
  
  const date = new Date().toLocaleDateString();
  
  return <>
  {date}

  <button style={{ display: "block" }} onClick={handleClick}>Click here!</button>
  </>;
};

export default CurrentDate;
