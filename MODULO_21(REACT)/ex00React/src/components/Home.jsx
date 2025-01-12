// eslint-disable-next-line no-unused-vars
import React from "react";
import '../Home.css'
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Personal React Studies</h1>
      <h4>All this project, are only test and little studies myself.</h4>
      <ul id="select-page">
        <li>
          <Link to="props-test">Props Test</Link>
        </li>
        <li>
          <Link to="conditional-rendering">Conditional Rendering</Link>
        </li>
        <li>
          <Link to="render-many-elem">Render Many Elements</Link>
        </li>
        <li>
          <Link to="time">Time</Link>
        </li>
        <li>
          <Link to="uncontrolled-form">Uncontrolled Form</Link>
        </li>
        <li>
          <Link to="controlled-form">Controlled Form</Link>
        </li>
        <li>
          <Link to="multiple-inputs-form">Multiple Inputs Form</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
