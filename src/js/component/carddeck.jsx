import React from "react";

const CardDeck = (props) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container d-flex flex-row flex-wrap justify-content-evenly">
        {props.children}
      </div>
    </div>
  );
};

export default CardDeck;
