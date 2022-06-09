import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const style = {
    width: props.width ? props.width : "18rem",
    margin: props.margin ? props.margin : "1rem"
  };

  return (
    <div className="card" style={style}>
      <img src={props.imgsrc} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.href} className="btn btn-primary">
          {props.buttontext}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
  imgsrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttontext: PropTypes.string,
  href: PropTypes.string,
};

export default Card;
