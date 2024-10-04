import React from "react";
import CardComponent from "./CardComponent";

function CardsRow() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#510648bb",
          padding:"3vh 10vw",
          color:"white",
          fontSize:"24px"
        }}
      >
        RESEARCHES
      </div>
      <div className="homepage-card-row">
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </div>
    </div>
  );
}

export default CardsRow;
