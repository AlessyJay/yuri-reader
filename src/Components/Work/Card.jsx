import React from "react";

function Card(props) {
  const {
    item: { picture, name },
  } = props;

  return (
    <div className="Card">
      <img src={picture} alt="Cover image" />
      <hr />
      <div className="title">
        <h2 style={{ fontWeight: "bolder" }}>{name}</h2>
      </div>
    </div>
  );
}

export default Card;
