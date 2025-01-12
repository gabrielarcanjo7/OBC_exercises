// eslint-disable-next-line no-unused-vars
import { React, useRef } from "react";
import { Link } from "react-router-dom";

const UncontrolledForm = () => {
  const nomeRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name submitted: ${nomeRef.current.value}`);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Name :
          <input type="text" ref={nomeRef} />
        </label>
        <button type="Submit">Submit</button>
      </form>

      <Link to='/'>Home </Link> 
      <Link to='/multiple-inputs-form'> Next... </Link>
    </>
  );
};

export default UncontrolledForm;
