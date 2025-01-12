// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ControlledForm = () => {
  const [name, setName] = useState("");

  /*INPUT */
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value); // Mostra o valor do input no console a cada digitação
  };

  /*BUTTON */
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name submitted: ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to='/'> Home </Link> 
      <Link to='/multiple-inputs-form'> Next... </Link>
    </>
  );
};

export default ControlledForm;
