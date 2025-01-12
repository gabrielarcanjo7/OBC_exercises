// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const MultipleInputsForm = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Submitted Values:", data);
  };

  return ( <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <label>
        {" "}
        FirstName:{" "}
        <input
          type="text"
          {...register("firstname", { required: "First name is required!" })}
        />{" "}
      </label>{" "}
      <label>
        {" "}
        LastName: <input type="text" {...register("lastname")} />{" "}
      </label>{" "}
      <label>
        {" "}
        Email:{" "}
        <input
          type="email"
          {...register("email", { required: "Email is required!" })}
        />{" "}
      </label>{" "}
      <button style={{ padding: "2px" }} type="submit">
        Submit
      </button>{" "}
    </form>

 
    <Link to='/'> Home </Link> 
    </> 
    
  );
  
};
export default MultipleInputsForm;
