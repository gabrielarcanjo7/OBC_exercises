import React from "react";

const CurrentDate = ({handleClick}) => {
  
  const date = new Date().toLocaleDateString();
  
  return <>
  {date}
  <hr />
  <button onClick={handleClick}>Click here!</button>
  </>;
};

export default CurrentDate;
