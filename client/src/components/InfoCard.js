import React from "react";
import "../index.css";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      {props.info}
    </div>
  );
}

export default Card;
