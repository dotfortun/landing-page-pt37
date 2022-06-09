import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  return (
    <div className="col p-5 my-1 col-10 offset-1 bg-dark text-light">
      <h1 className="display-5 fw-bold">{props.title}</h1>
      <p className="col-md-8 fs-4">
        {props.description}
      </p>
      <button className="btn btn-primary btn-lg" type="button">
        {props.buttontext ? props.buttontext : "Button!"}
      </button>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttontext: PropTypes.string,
};

export default Jumbotron;
