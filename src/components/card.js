import React from "react";

function Card(props) {
  return (
    <div id="card">
      <h4 id="title">{props.title}</h4>
      <h4 id="data">{props.data}</h4>
    </div>
  );
}

export default Card;
