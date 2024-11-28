// eslint-disable-next-line no-unused-vars
import { React, useRef } from "react";

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
    </>
  );
};

export default UncontrolledForm;
