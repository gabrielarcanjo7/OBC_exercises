// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const MultipleInputsForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Values:", formValues);
  };

  return (
    <> 
    <form onSubmit={handleSubmit}>
        
        <label>
            FirstName:
            <input type="text" name="firstname" value={formValues.firstname} onChange={handleInputChange}/>
        </label>

        <label>
            LastName:
            <input type="text" name="lastname" value={formValues.lastname} onChange={handleInputChange}/>
        </label>

        <label>
            Email:
            <input type="text" name="email" value={formValues.email} onChange={handleInputChange}/>
        </label>

        <button style={{ padding: '2px' }} type="submit">Submit</button>
    </form>
    </>
  )
};

export default MultipleInputsForm;