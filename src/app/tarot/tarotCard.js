import React from "react";

function TarotCard(props) {
  return (
    <div className="tarotCard">
      <h1>{props.name}</h1>
      <p>{props.suite}</p>
      <img src={props.image} alt="card" />
      <p>{props.description}</p>
      <p>{props.interpretation}</p>
    </div>
  );
}

export default TarotCard;
